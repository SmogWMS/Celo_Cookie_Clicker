module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  console.log("🍪 Deploying CeloCookieClicker with account:", deployer);

  const contract = await deploy("CeloCookieClicker", {
    from: deployer,
    args: [],
    log: true,
  });

  console.log("✅ Deployed at:", contract.address);
};

module.exports.tags = ["CookieClicker"];
