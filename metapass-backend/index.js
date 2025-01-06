const express = require("express");
const ethers = require("ethers");

const app = express();
const port = 4000;

const provider = new ethers.providers.JsonRpcProvider(
  `https://eth-sepolia.g.alchemy.com/v2/<your-api-key>`
);

const ERC20_ABI = [
  "function getPassport() public view returns(tuple(address addrs, string firstName, string sex, string lastName, string placeOfBirth, string DOB, string passportNumber)[] memory)",
  "function createPassport(string memory _fName, string memory _lName, string memory _pob, string memory _dob, string memory _passNo, string memory _addrs, string memory _sex) public",
];
const addrs = "0xD1e40D70495b6ebE84425beA301EcC70974b4E26"; // addrs of the contract.

const contract = new ethers.Contract(addrs, ERC20_ABI, provider);
var privateKey = "your-pvt-key";
const wallet = new ethers.Wallet(privateKey, provider);

var cors = require("cors");
var bodyParser = require("body-parser");
var pubAddress = "";
var len = 0;
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", async (req, res) => {
  const locRes = await contract.getPassport();
  res.send(locRes.toString());
  len = locRes.length;
  console.log(len);
  return locRes;
});

app.get("/getPassport/latest", async (req, res) => {
  const locRes = await contract.getPassport();
  console.log(len - 1);
  res.json(locRes[len - 1]);
});

app.post("/createPassport", async (req, res) => {
  console.log(req.body);
  console.log(pubAddress[0]);

  const res2 = await contract.getPassport();
  for (let i = 0; i < res2.length; i++) {
    if (res2[i][0] == pubAddress) {
      res.send("Passport already exists");
      return;
    }
  }
  contract.connect(wallet);
  const result = await contract
    .connect(wallet)
    .createPassport(
      req.body.fName,
      req.body.lName,
      req.body.pob,
      req.body.dob,
      req.body.passNo,
      pubAddress[0].toString(),
      req.body.sex
    );
  res.send(result);
});

app.post("/login", (req, res) => {
  pubAddress = req.body.addrs;
  res.send("Logged in");
  console.log(pubAddress[0]);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
