import HabitPresenter from "../habit_presenter";

describe("HabitPresenter", () => {
  const habits = [
    { id: 1, name: "Reading", count: 1 },
    { id: 2, name: "Running", count: 0 },
  ];

  let habitPresenter;
  let update;

  beforeEach(() => {
    habitPresenter = new HabitPresenter(habits);
    update = jest.fn();
  });

  it("getHabits should be fine", () => {
    expect(habitPresenter.getHabits()).toEqual(habits);
  });

  it("increment habit count and call update callback", () => {
    habitPresenter.increment(habits[0], update);
    expect(habitPresenter.getHabits()[0].count).toBe(2);
    expect(update).toHaveBeenCalledTimes(1);
    expect(update).toHaveBeenCalledWith(habitPresenter.getHabits());
  });
});
