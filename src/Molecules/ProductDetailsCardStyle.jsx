import { styled } from "@mui/system";

export const CardContainer = styled("div")({
//   width: "100%",
//   padding: "20px",
  border: "1px solid #ccc",
  margin: "10px",
  boxSizing: "border-box",
  backgroundColor: "#B9D9EB", 
  display: "flex",
  alignItems: "center", 
  boxShadow: "2px 2px 5px #4B9CD3", 
  overflow: "hidden", 
});

export const ImageContainer = styled("div")({
  flex: "0 0 40%", 

});

export const Image = styled("img")({
  width: "100%", 
  maxWidth:"400px",
  height: "auto",
  maxHeight:"500px", 
  display:"flex",
alignContent:"center",
alignItems:"center",
justifyContent:"center"
});

export const DetailsContainer = styled("div")({
  flex: "1", 
  marginLeft: "20px", 
});

export const InfoSection = styled("div")({
  marginBottom: "14px",
  marginLeft:"20px",
  width: "100%", 
});

