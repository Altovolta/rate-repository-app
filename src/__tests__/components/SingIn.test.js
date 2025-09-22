import { render, screen, fireEvent, waitFor, act, userEvent } from '@testing-library/react-native';
import { expect, jest } from '@jest/globals';
import { SingInContainer } from '../../components/SingIn';
// ...

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      const onSubmit = jest.fn()

      render (<SingInContainer onSubmit={onSubmit} />)

      act(() => {
        userEvent.type(screen.getByPlaceholderText('Username'), 'kalle')
        userEvent.type(screen.getByPlaceholderText('Password'), 'password')
        userEvent.press(screen.getByTestId('singinFormSumbit'))
      });

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: 'kalle',
          password: 'password',
        })
      });
    });
  });
});