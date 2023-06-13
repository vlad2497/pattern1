import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { AllProviders, ReduxProvider } from "@/tests/utils";
import App from "./app";

describe("app router", () => {
  it("app was rendered", async () => {
    render(<App />, { wrapper: AllProviders });
    const mainPageTitle = await screen.findByText("main page");
    expect(mainPageTitle).toBeInTheDocument();
  });

  it("genres page was rendered", async () => {
    const genresRoute = "/genres";
    render(
      <MemoryRouter initialEntries={[genresRoute]}>
        <ReduxProvider>
          <App />
        </ReduxProvider>
      </MemoryRouter>
    );
    expect(screen.getByText(/genres page/i)).toBeInTheDocument();
  });

  it("info page was rendered", async () => {
    const infoRoute = "/info";
    render(
      <MemoryRouter initialEntries={[infoRoute]}>
        <ReduxProvider>
          <App />
        </ReduxProvider>
      </MemoryRouter>
    );
    expect(screen.getByText(/info page/i)).toBeInTheDocument();
  });

  it("404 page was rendered", async () => {
    const badRoute = "/bad-route";
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <ReduxProvider>
          <App />
        </ReduxProvider>
      </MemoryRouter>
    );
    expect(screen.getByText(/нет такой страницы!/i)).toBeInTheDocument();
  });
});
