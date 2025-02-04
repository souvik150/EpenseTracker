/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AboutImport } from './routes/about'
import { Route as AuthenticatedImport } from './routes/_authenticated'
import { Route as AuthenticatedIndexImport } from './routes/_authenticated/index'
import { Route as AuthenticatedProfileImport } from './routes/_authenticated/profile'
import { Route as AuthenticatedExpensesImport } from './routes/_authenticated/expenses'
import { Route as AuthenticatedCreateExpenseImport } from './routes/_authenticated/create-expense'
import { Route as AuthenticatedAboutImport } from './routes/_authenticated/about'

// Create/Update Routes

const AboutRoute = AboutImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const AuthenticatedRoute = AuthenticatedImport.update({
  id: '/_authenticated',
  getParentRoute: () => rootRoute,
} as any)

const AuthenticatedIndexRoute = AuthenticatedIndexImport.update({
  path: '/',
  getParentRoute: () => AuthenticatedRoute,
} as any)

const AuthenticatedProfileRoute = AuthenticatedProfileImport.update({
  path: '/profile',
  getParentRoute: () => AuthenticatedRoute,
} as any)

const AuthenticatedExpensesRoute = AuthenticatedExpensesImport.update({
  path: '/expenses',
  getParentRoute: () => AuthenticatedRoute,
} as any)

const AuthenticatedCreateExpenseRoute = AuthenticatedCreateExpenseImport.update(
  {
    path: '/create-expense',
    getParentRoute: () => AuthenticatedRoute,
  } as any,
)

const AuthenticatedAboutRoute = AuthenticatedAboutImport.update({
  path: '/about',
  getParentRoute: () => AuthenticatedRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_authenticated': {
      id: '/_authenticated'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthenticatedImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/_authenticated/about': {
      id: '/_authenticated/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AuthenticatedAboutImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/create-expense': {
      id: '/_authenticated/create-expense'
      path: '/create-expense'
      fullPath: '/create-expense'
      preLoaderRoute: typeof AuthenticatedCreateExpenseImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/expenses': {
      id: '/_authenticated/expenses'
      path: '/expenses'
      fullPath: '/expenses'
      preLoaderRoute: typeof AuthenticatedExpensesImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/profile': {
      id: '/_authenticated/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof AuthenticatedProfileImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/': {
      id: '/_authenticated/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof AuthenticatedIndexImport
      parentRoute: typeof AuthenticatedImport
    }
  }
}

// Create and export the route tree

interface AuthenticatedRouteChildren {
  AuthenticatedAboutRoute: typeof AuthenticatedAboutRoute
  AuthenticatedCreateExpenseRoute: typeof AuthenticatedCreateExpenseRoute
  AuthenticatedExpensesRoute: typeof AuthenticatedExpensesRoute
  AuthenticatedProfileRoute: typeof AuthenticatedProfileRoute
  AuthenticatedIndexRoute: typeof AuthenticatedIndexRoute
}

const AuthenticatedRouteChildren: AuthenticatedRouteChildren = {
  AuthenticatedAboutRoute: AuthenticatedAboutRoute,
  AuthenticatedCreateExpenseRoute: AuthenticatedCreateExpenseRoute,
  AuthenticatedExpensesRoute: AuthenticatedExpensesRoute,
  AuthenticatedProfileRoute: AuthenticatedProfileRoute,
  AuthenticatedIndexRoute: AuthenticatedIndexRoute,
}

const AuthenticatedRouteWithChildren = AuthenticatedRoute._addFileChildren(
  AuthenticatedRouteChildren,
)

export interface FileRoutesByFullPath {
  '': typeof AuthenticatedRouteWithChildren
  '/about': typeof AuthenticatedAboutRoute
  '/create-expense': typeof AuthenticatedCreateExpenseRoute
  '/expenses': typeof AuthenticatedExpensesRoute
  '/profile': typeof AuthenticatedProfileRoute
  '/': typeof AuthenticatedIndexRoute
}

export interface FileRoutesByTo {
  '/about': typeof AuthenticatedAboutRoute
  '/create-expense': typeof AuthenticatedCreateExpenseRoute
  '/expenses': typeof AuthenticatedExpensesRoute
  '/profile': typeof AuthenticatedProfileRoute
  '/': typeof AuthenticatedIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_authenticated': typeof AuthenticatedRouteWithChildren
  '/about': typeof AboutRoute
  '/_authenticated/about': typeof AuthenticatedAboutRoute
  '/_authenticated/create-expense': typeof AuthenticatedCreateExpenseRoute
  '/_authenticated/expenses': typeof AuthenticatedExpensesRoute
  '/_authenticated/profile': typeof AuthenticatedProfileRoute
  '/_authenticated/': typeof AuthenticatedIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '' | '/about' | '/create-expense' | '/expenses' | '/profile' | '/'
  fileRoutesByTo: FileRoutesByTo
  to: '/about' | '/create-expense' | '/expenses' | '/profile' | '/'
  id:
    | '__root__'
    | '/_authenticated'
    | '/about'
    | '/_authenticated/about'
    | '/_authenticated/create-expense'
    | '/_authenticated/expenses'
    | '/_authenticated/profile'
    | '/_authenticated/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  AuthenticatedRoute: typeof AuthenticatedRouteWithChildren
  AboutRoute: typeof AboutRoute
}

const rootRouteChildren: RootRouteChildren = {
  AuthenticatedRoute: AuthenticatedRouteWithChildren,
  AboutRoute: AboutRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_authenticated",
        "/about"
      ]
    },
    "/_authenticated": {
      "filePath": "_authenticated.tsx",
      "children": [
        "/_authenticated/about",
        "/_authenticated/create-expense",
        "/_authenticated/expenses",
        "/_authenticated/profile",
        "/_authenticated/"
      ]
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/_authenticated/about": {
      "filePath": "_authenticated/about.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/create-expense": {
      "filePath": "_authenticated/create-expense.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/expenses": {
      "filePath": "_authenticated/expenses.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/profile": {
      "filePath": "_authenticated/profile.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/": {
      "filePath": "_authenticated/index.tsx",
      "parent": "/_authenticated"
    }
  }
}
ROUTE_MANIFEST_END */
