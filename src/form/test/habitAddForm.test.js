import HabitAddForm from "../habitAddForm";
import { screen } from "@testing-library/react";

describe("HabitAddForm", () => {
  let onAdd;
  beforeEach(() => {
    onAdd = jest.fn();
  });

  it("calls, onAdd when button is clicked", () => {
    render(<HabitAddForm onAdd={onAdd} />);
    const input = screen;
  });
});
