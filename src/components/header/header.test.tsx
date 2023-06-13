import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "@/app";
import { AllProviders } from "@/tests/utils";
import Header from ".";

describe("header", () => {
  it("header was rendered", async () => {
    render(<Header />, { wrapper: AllProviders });
  });

  it("rendering a genres page by genres link click", async () => {
    render(<App />, { wrapper: AllProviders });
    await screen.findByText("main page");
    const user = userEvent.setup();
    await user.click(screen.getByText(/genres/i));
    expect(screen.getByText("genres page")).toBeInTheDocument();
  });

  it("rendering a info page by info link click", async () => {
    render(<App />, { wrapper: AllProviders });
    const user = userEvent.setup();
    await user.click(screen.getByText(/info/i));
    expect(screen.getByText(/info page/i)).toBeInTheDocument();
  });

  it("rendering a main page by home link click", async () => {
    render(<App />, { wrapper: AllProviders });
    const user = userEvent.setup();
    await user.click(screen.getByText(/home/i));
    expect(screen.getByText(/main page/i)).toBeInTheDocument();
  });

  it("active link has red color", async () => {
    render(<App />, { wrapper: AllProviders });
    expect(screen.getByText(/home/i)).toHaveStyle("color: red");
    expect(screen.getByText(/info/i)).toHaveStyle("color: blue");
    expect(screen.getByText(/genres/i)).toHaveStyle("color: blue");
  });

  it("genres page link has red color on genres page", async () => {
    render(<App />, { wrapper: AllProviders });
    const user = userEvent.setup();
    await user.click(screen.getByText(/genres/i));
    expect(screen.getByText(/home/i)).toHaveStyle("color: blue");
    expect(screen.getByText(/info/i)).toHaveStyle("color: blue");
    expect(screen.getByRole("page-genres-link")).toHaveStyle("color: red");
  });
});
