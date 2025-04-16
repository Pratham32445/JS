import axios from "axios";

const sessionToken = "s%3A3dCy90Emhl7HXycJqR1JFmG2lScRxSU_.hqE3g3OwfxvOnuju2E1k7AE8%2FdtuxJrMgF%2FOxQJX2wk";

const fetchData = async () => {
  const delays = Array.from({ length: 28 }, () => 2500 + Math.random() * (10000 - 2500));

  for (let idx = 0; idx < 28; idx++) {
    setTimeout(async () => {
      try {
        const res = await axios.get(`https://exam.ankush.wiki/api/data?part=${idx + 1}`, {
          headers: {
            Cookie: `connect.sid=${sessionToken}`,
          },
        });
        console.log(`Part ${idx + 1} response:`, res.data);
      } catch (error) {
        console.error(`Error fetching part ${idx + 1}:`, error.message);
      }
    }, delays[idx]);
  }
};

fetchData();
