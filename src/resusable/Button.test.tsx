import { composeStories } from "@storybook/testing-react";
import { render } from "@testing-library/react";
import Button from "./Button";
import * as stories from "./Button.stories";

const { Primary, Secondary } = composeStories(stories);

describe("Button", () => {
  it("Should render children", () => {
    const { getByRole } = render(<Primary />);
    getByRole("button", { name: "Click me" });
  });

  // it("should set a custom CSS class", () => {
  //     const { getByRole } = render(
  //         <Button type="button" variant="primary" className="my-class">
  //             Click Me
  //         </Button>
  //     );
  //     expect(getByRole("button", {name: "Click me"})).toHaveClass("my-class");
  // });

  it("should set a custom CSS class", () => {
    const { getByRole } = render(
      <Button type="button" variant="primary" className="my-class">
        Click me
      </Button>
    );
    expect(getByRole("button", { name: "Click me" })).toHaveClass("my-class");
  });

  it("should have a type", () => {
    const { getByRole } = render(
      <Button type="button" variant="primary" className="my-class">
        Click me
      </Button>
    );
    expect(getByRole("button", { name: "Click me" })).toHaveAttribute(
      "type",
      "button"
    );
  });

  it("should apple the proper styles for variant", () => {
    const { getByRole } = render(
      <Button type="button" variant="secondary" className="my-class">
        Click me
      </Button>
    );
    expect(getByRole("button", { name: "Click me" })).toHaveClass(
      "bg-gray-500 text-white"
    );
  });
});
