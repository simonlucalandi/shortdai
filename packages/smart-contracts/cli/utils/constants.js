const CONTRACT_ADDRESSES = {
  ISoloMargin: "0x1e0447b19bb6ecfdae1e4ae1694b0c3659614e4e",
  IDssProxyActions: "0x82ecD135Dce65Fbc6DbdD0e4237E0AF93FFD5038",
  IDssCdpManager: "0x5ef30b9986345249bc32d8928B7ee64DE9435E39",
  IProxyRegistry: "0x4678f0a6958e4D2Bc4F1BAF7Bc52E8F3564f3fE4",
  IOneSplit: "0xC586BeF4a0992C495Cf22e1aeEE4E446CECDee0E",
  IGetCdps: "0x36a724Bd100c39f0Ea4D3A20F7097eE01A8Ff573",
  CurveFiSUSDv2: "0xA5407eAE9Ba41422680e2e00537571bcC53efBfD",
  CurveFiY: "0x45F783CCE6B7FF23B2ab2D70e416cdb7D6055f51",
};

const ETH_ADDRESS = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";

const ERC20_ADDRESSES = {
  DAI: "0x6b175474e89094c44da98b954eedeac495271d0f",
  USDC: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
};

const ERC20_DECIMALS = {
  DAI: 18,
  USDC: 6,
};

module.exports = {
  CONTRACT_ADDRESSES,
  ERC20_ADDRESSES,
  ERC20_DECIMALS,
  ETH_ADDRESS,
};
