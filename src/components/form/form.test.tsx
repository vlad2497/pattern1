import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AllProviders } from "@/tests/utils";
import Form from ".";

describe("form", () => {
  it("form was rendered", async () => {
    render(<Form />, {
      wrapper: AllProviders,
    });
  });

  it("fields default values were checked", async () => {
    render(<Form />, {
      wrapper: AllProviders,
    });

    const surnameInput = screen.getByRole("surname-input") as HTMLInputElement;
    const fullnameInput = screen.getByRole(
      "fullname-input"
    ) as HTMLInputElement;
    const ageInput = screen.getByRole("age-input") as HTMLInputElement;
    const submitButton = screen.getByRole("button") as HTMLButtonElement;

    expect(surnameInput.value).toBe("");
    expect(fullnameInput.value).toBe("");
    expect(ageInput.value).toBe("25");
    expect(submitButton).not.toHaveClass("Mui-disabled");
  });

  it("fields change value were checked", async () => {
    render(<Form />, {
      wrapper: AllProviders,
    });

    const surnameInput = screen.getByRole("surname-input") as HTMLInputElement;
    const fullnameInput = screen.getByRole(
      "fullname-input"
    ) as HTMLInputElement;
    const ageInput = screen.getByRole("age-input") as HTMLInputElement;

    const user = userEvent.setup();
    await user.type(surnameInput, "surname");
    await user.type(fullnameInput, "fullname");
    await user.type(ageInput, "2");

    expect(surnameInput.value).toBe("surname");
    expect(fullnameInput.value).toBe("fullname");
    expect(ageInput.value).toBe("252");
  });

  it("surnameInput min length error was viewed after submit", async () => {
    render(<Form />, {
      wrapper: AllProviders,
    });

    const surnameInput = screen.getByRole(
      "surname-text-field"
    ) as HTMLInputElement;
    const submitButton = screen.getByRole("button") as HTMLButtonElement;

    const user = userEvent.setup();
    await user.type(surnameInput, "surname");
    await user.click(submitButton);

    const helperText = screen.getByRole("surname-text-field-helper-text");
    expect(helperText).toBeInTheDocument();
  });
});
