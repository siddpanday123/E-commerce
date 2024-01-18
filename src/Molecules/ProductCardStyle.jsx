import { styled } from "@mui/system";

const Container = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", // Remove the double quotes around 200px and 1fr
  gap: "16px",
  
});

export const Wrapper = styled("div")({
  border: "1px solid #ddd",
  padding: "16px" ,
  textAlign: "center",
  background:"#B9D9EB",
  boxShadow: "2px 2px 5px #4B9CD3", 
  transition: "transform 0.3s ease-in-out", // Add a transition for smooth scaling
  "&:hover": {
    transform: "scale(1.1)", // Enlarge the card on hover
  },
});

export const ImgWrapper = styled("img")(
  ({ src, radius = "5px", width = "90px", height = "90px" }) => ({
    width: width,
    height: height,
    maxHeight: "100px",
    src: src,
    borderRadius: radius,
  })
);
export const ImgContainer = styled("span")({
  display: "flex",
  height: "100px",
  alignItems: "center",
  justifyContent: "center",
});

export default Container;
