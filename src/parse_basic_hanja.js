const juniorTds = [];
    const seniorTds = [];

    const doc = document.createElement("html");
    doc.innerHTML = basic_hanja;
    const table = doc.querySelector(".datatable");
    const rows = table.querySelectorAll("tr");
    rows.forEach((row) => {
      const data = row.querySelectorAll("td");
      if (data.length > 0) {
        juniorTds.push(data[0]);
      }
      if (data.length > 1) {
        seniorTds.push(data[1]);
      }
    });

    function parseWordData(td) {
      const hanjas = [...td.querySelectorAll("a")].map((anchor) => [anchor.title]);
      const wordDatas = td.innerHTML.split("•").map((data) => data.trim());
      wordDatas.forEach((text, index) => {
        if (text.trim() === '') return;
        const [meaning, pronunciation] = text.substring(text.indexOf("(")+1, text.length-1).split(" ");
        hanjas[index].push(meaning)
        hanjas[index].push(pronunciation)
      });
      return hanjas;
    }

    const juniorHanjas = [];
    juniorTds.forEach((td) => {
      juniorHanjas.push(...parseWordData(td));
    });
    console.log(juniorHanjas);

    const seniorHanjas = [];
    seniorTds.forEach((td) => {
      seniorHanjas.push(...parseWordData(td));
    });
    console.log(seniorHanjas);

    let res = seniorHanjas.map((word) => word.join(" - ")).join("\n")

    navigator.clipboard.writeText(res);