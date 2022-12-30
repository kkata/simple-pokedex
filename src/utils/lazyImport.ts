import * as React from "react";

// named imports for React.lazy: https://github.com/facebook/react/issues/14603#issuecomment-726551598
export function lazyImport<
  T extends React.ComponentType<any>,
  I extends { [K2 in K]: T },
  K extends keyof I
>(factory: () => Promise<I>, name: K): I {
  return Object.create({
    [name]: React.lazy(() =>
      factory().then((module) => ({ default: module[name] }))
    ),
  });
}

// Usage
// const { Home } = lazyImport(() => import("./Home"), "Home");

// ref. https://github.com/alan2207/bulletproof-react/blob/6dd37a6725168c412eee3a66b7dbb251a094c003/src/utils/lazyImport.ts
