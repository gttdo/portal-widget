const { widget } = figma;
const { AutoLayout, Ellipse, Frame, Image, Rectangle, SVG, Text } = widget;

function Portal() {
  return (
    <Frame
      name="Portal"
      overflow="visible"
      width={750}
      height={638}
    >
      <Image
        name="portal"
        width={750}
        height={638}
        src="https://media0.giphy.com/media/Yo2fMrTG6dgLdiKX2z/giphy.gif?cid=6c09b952e5904e2cb904fa584699bc3c07cac13e42e86f3b&rid=giphy.gif&ct=s"
      />
    </Frame>
  );
}
widget.register(Portal);
