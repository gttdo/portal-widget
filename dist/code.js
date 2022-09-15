(() => {
  // widget-src/code.tsx
  var { widget } = figma;
  var { AutoLayout, Ellipse, Frame, Image, Rectangle, SVG, Text } = widget;
  function Portal() {
    return /* @__PURE__ */ figma.widget.h(Frame, {
      name: "Portal",
      fill: "#FFF",
      width: 639,
      height: 596
    }, /* @__PURE__ */ figma.widget.h(Ellipse, {
      name: "Ellipse 1",
      x: 140,
      y: 118,
      fill: "#D21E1E",
      width: 359,
      height: 359
    }));
  }
  widget.register(Portal);
})();
