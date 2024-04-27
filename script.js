let Data = { Title: "", URL: "" };

chrome.tabs.query(
  {
    active: true,
    currentWindow: true,
  },
  (tabs) => {
    const tab = tabs[0];
    Data.Title = tab.title;
    Data.URL = tab.url;
    console.log(`Title: ${Data.Title}`);
    console.log(`URL: ${Data.URL}`);
  }
);

window.addEventListener("load", () => {
  const txtBox = document.querySelector("input");
  document.querySelector("button.ttl").addEventListener("click", () => {
    txtBox.value = Data.Title;
  });
});
