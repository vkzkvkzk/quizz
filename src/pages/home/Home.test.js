import { fireEvent, screen, } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';
import HomePage from './HomePage';
import { contextWrapper } from '../../tests/wrapper';
import quiz from '../../mock/quiz'

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}))

beforeEach(() => jest.clearAllMocks());

test('homepage', async () => {
  contextWrapper(<HomePage />)

  const title = screen.getByText(/Quiz!!/i);
  expect(title).toBeInTheDocument();

  const button = screen.getAllByRole("button")
  await fireEvent.click(button[0]);
  expect(mockNavigate).toHaveBeenCalledWith("/quiz");

  await fireEvent.click(button[1]);
  expect(mockNavigate).toHaveBeenCalledWith("/review");
});