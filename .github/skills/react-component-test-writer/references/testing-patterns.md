# Frontend Test Patterns

Use these patterns when writing React component tests for this repository.

## General Pattern

- Arrange: render the component with the smallest viable props.
- Act: interact the way a user would, such as typing, clicking, or selecting.
- Assert: verify accessible output, callback calls, and side effects.

## Query Preference Order

1. `getByRole`
2. `getByLabelText`
3. `getByPlaceholderText`
4. `getByText`
5. `getByTestId` only if there is no better accessible option

## Mocking Guidance

- Mock `axios` when the component submits or fetches data.
- Mock `useTheme` when the component changes classes or layout based on theme.
- Mock router hooks only if navigation is part of the behavior under test.
- Keep mocked return values narrow and realistic.

## Form Example Shape

For a form component, good coverage usually includes:

- Renders the expected title and inputs
- Prefills values when editing an existing item
- Submits the right payload when the primary button is clicked
- Calls `onSave` and `onClose` after a successful submit
- Handles the cancel action without submitting

## Edge Cases Worth Covering

- Empty prop arrays or missing optional props
- Edit and create modes
- Disabled or hidden controls
- Error handling paths when async calls fail

## Repo Example Targets

- `frontend/src/components/entity/product/ProductForm.tsx`
- `frontend/src/components/entity/product/Products.tsx`
- `frontend/src/components/admin/AdminProducts.tsx`

These are good candidates because they mix forms, state, and external dependencies.
