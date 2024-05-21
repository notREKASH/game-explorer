const getFullCoverUrl = (relativeUrl, thumbSize) => {
  return relativeUrl
    ? `https:${relativeUrl.replace("thumb", thumbSize || "cover_big")}`
    : "";
};

export default getFullCoverUrl;
