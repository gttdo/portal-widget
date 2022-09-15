const { widget } = figma;
const { AutoLayout, Ellipse, Frame, Image, Rectangle, SVG, Text } = widget;

function Portal() {
  return (
    <Frame
      name="Portal"
      fill="#FFF"
      width={639}
      height={596}
    >
      <Ellipse
        name="Ellipse 1"
        x={140}
        y={118}
        fill="#D21E1E"
        width={359}
        height={359}
      />
    </Frame>
  );
}
widget.register(Portal);
