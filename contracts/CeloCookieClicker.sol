// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

/**
 * @title CeloCookieClicker
 * @dev A simple cookie clicker game stored on Celo blockchain.
 * Each user accumulates cookies that can be synced from an off-chain relayer.
 */
contract CeloCookieClicker {
    struct Player {
        uint256 cookies;
        uint256 lastSync;
    }

    mapping(address => Player) public players;
    address public owner;
    address public relayer;

    event CookiesSynced(address indexed player, uint256 totalCookies);
    event RelayerUpdated(address newRelayer);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }

    modifier onlyRelayer() {
        require(msg.sender == relayer, "Not relayer");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function setRelayer(address _relayer) external onlyOwner {
        relayer = _relayer;
        emit RelayerUpdated(_relayer);
    }

    function syncCookies(address player, uint256 newCookies) external onlyRelayer {
        Player storage p = players[player];
        p.cookies += newCookies;
        p.lastSync = block.timestamp;
        emit CookiesSynced(player, p.cookies);
    }

    function getCookies(address player) external view returns (uint256) {
        return players[player].cookies;
    }
}
