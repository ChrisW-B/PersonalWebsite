const gradientToHSL = (index: number, totalEntries: number) =>
  `${186 + ((349 - 186) / totalEntries) * index}, ${80 - ((80 - 45) / totalEntries) * index}%, 60%`;
export default gradientToHSL;
