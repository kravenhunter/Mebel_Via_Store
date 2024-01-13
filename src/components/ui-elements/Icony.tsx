import { Icon } from "@iconify/react";

const Icony = ({ name = "streamline:smiley-emoji-kiss-nervous", width = "24", height = "24", rotate = 0, color = "black" }) => {
  return <Icon icon={name} width={width} height={height} rotate={rotate} color={color} />;
};

export default Icony;
