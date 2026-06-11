---
name: react-component-test-writer
description: Generate React Testing Library and Vitest tests for frontend components in this repo. Use when asked to add tests for components, forms, context consumers, hooks, or other interactive UI in frontend/src/**.
---

# React Component Test Writer

This skill helps Copilot write focused frontend tests for the OctoCAT Supply Chain app.

## When to Use This Skill

Use this skill when the task is to:

- Add tests for a React component in `frontend/src/**`
- Cover form behavior, callbacks, conditional rendering, or async UI state
- Mock API calls, theme context, router behavior, or other external dependencies
- Turn a manually verified UI flow into a repeatable test

## Repo Testing Conventions

- Use Vitest with React Testing Library.
- Keep tests colocated with the component as `<Component>.test.tsx`.
- Prefer accessible queries such as `getByRole`, `getByLabelText`, and `findByRole`.
- Mock only the dependencies the component actually needs.
- Test user-visible behavior, not implementation details.
- Reset mocks between tests.

## Workflow

1. Read the component and identify its props, context usage, and external imports.
2. Decide what needs to be mocked, such as `axios`, `useTheme`, or router hooks.
3. Write tests for the main render path, interaction path, and any important edge cases.
4. Cover async behavior with `waitFor` or `findBy*` queries.
5. Keep fixtures small and realistic.

## What Good Output Looks Like

- A colocated `.test.tsx` file that matches the component structure
- Tests that exercise labels, buttons, inputs, and callbacks from a user perspective
- Mock setup that is easy to understand and easy to update
- Coverage for both success paths and the key failure or empty-state paths

## Repo-Specific Guidance

- Components in `frontend/src/components/entity/product/` often depend on `axios` and the theme context, so expect to mock those explicitly.
- Forms should verify submit and cancel behavior, plus any API call made on submit.
- When a component has several inputs, prefer one test per meaningful user flow instead of one test per field.

## Useful Reminders

- If the component uses labels, query by label instead of `data-testid`.
- If the component renders different text or controls by prop, cover both branches.
- If the component has no existing test file, create the first one alongside it.
- If the frontend test command is not yet scripted, suggest `npx vitest` as the immediate way to run the new test.
