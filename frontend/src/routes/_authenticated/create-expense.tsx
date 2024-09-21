import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { toast } from "sonner";
import { useForm } from "@tanstack/react-form";
import {
  createExpense,
  getAllExpensesQueryOptions,
  loadingCreateExpenseQueryOptions,
} from "@/lib/api";
import { useQueryClient } from "@tanstack/react-query";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { createExpenseSchema } from "@server/sharedTypes";

export const Route = createFileRoute("/_authenticated/create-expense")({
  component: CreateExpense,
});

function CreateExpense() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const form = useForm({
    validatorAdapter: zodValidator(),
    defaultValues: {
      title: "",
      amount: "",
      date: new Date().toISOString(),
    },
    onSubmit: async ({ value }) => {
      const existingExpenses = await queryClient.ensureQueryData(
        getAllExpensesQueryOptions
      );

      // Navigate after form submission
      navigate({ to: "/expenses" });

      // Set loading state
      queryClient.setQueryData(loadingCreateExpenseQueryOptions.queryKey, {
        expense: value,
      });

      try {
        const newExpense = await createExpense({ value });

        // Update query data with new expense
        queryClient.setQueryData(getAllExpensesQueryOptions.queryKey, {
          ...existingExpenses,
          expenses: [newExpense, ...existingExpenses.expenses],
        });

        // Show success toast
        toast("Expense Created", {
          description: `Successfully created new expense: ${newExpense.id}`,
        });
      } catch (error) {
        // Show error toast
        toast("Error", {
          description: `Failed to create new expense`,
        });
      } finally {
        // Clear loading state
        queryClient.setQueryData(loadingCreateExpenseQueryOptions.queryKey, {});
      }
    },
  });

  return (
    <div className="p-2">
      <h2>Create Expense</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          void form.handleSubmit();
        }}
        className="flex flex-col gap-y-4 max-w-xl m-auto"
      >
        <form.Field
          name="title"
          validators={{
            onChange: createExpenseSchema.shape.title,
          }}
        >
          {(field) => (
            <div>
              <Label htmlFor={field.name}>Title</Label>
              <Input
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              {field.state.meta.isTouched &&
                field.state.meta.errors.length > 0 && (
                  <em>{field.state.meta.errors.join(", ")}</em>
                )}
            </div>
          )}
        </form.Field>

        <form.Field
          name="amount"
          validators={{
            onChange: createExpenseSchema.shape.amount,
          }}
        >
          {(field) => (
            <div>
              <Label htmlFor={field.name}>Amount</Label>
              <Input
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                type="number"
                onChange={(e) => field.handleChange(e.target.value)}
              />
              {field.state.meta.isTouched &&
                field.state.meta.errors.length > 0 && (
                  <em>{field.state.meta.errors.join(", ")}</em>
                )}
            </div>
          )}
        </form.Field>

        <form.Field
          name="date"
          validators={{
            onChange: createExpenseSchema.shape.date,
          }}
        >
          {(field) => (
            <div className="self-center">
              <Calendar
                mode="single"
                selected={new Date(field.state.value)}
                onSelect={(date) =>
                  field.handleChange((date ?? new Date()).toISOString())
                }
                className="rounded-md border"
              />
              {field.state.meta.isTouched &&
                field.state.meta.errors.length > 0 && (
                  <em>{field.state.meta.errors.join(", ")}</em>
                )}
            </div>
          )}
        </form.Field>

        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
        >
          {([canSubmit, isSubmitting]) => (
            <Button className="mt-4" type="submit" disabled={!canSubmit}>
              {isSubmitting ? "..." : "Submit"}
            </Button>
          )}
        </form.Subscribe>
      </form>
    </div>
  );
}
