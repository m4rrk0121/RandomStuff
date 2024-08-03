const { ethers } = require('ethers');
const provider = new ethers.providers.JsonRpcProvider("ENTER RPC");
const masterWallet = new ethers.Wallet('ENTER PRIVATE KEY', provider);

const tokenAddress = "ENTER CONTRACT ADDRESS"

const uniswapRouterAddress = '0x4752ba5DBc23f44D87826276BF6Fd6b1C372aD24';
const uniswapRouterABI = [{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_WETH","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"WETH","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"amountADesired","type":"uint256"},{"internalType":"uint256","name":"amountBDesired","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountTokenDesired","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountIn","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountOut","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsIn","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsOut","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"reserveA","type":"uint256"},{"internalType":"uint256","name":"reserveB","type":"uint256"}],"name":"quote","outputs":[{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETHSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermit","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityWithPermit","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapETHForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETHSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]


async function run_basics() {
    try {
        const balance = await provider.getBalance(masterWallet.address);
        console.log(`Balance: ${ethers.utils.formatEther(balance)} ETH`);
    } catch (error) {
        console.error("Error:", error);
    }
}
//uniswap function
async function buyToken(masterwallet) {
    try {
        const minbuyAmount = ethers.utils.parseEther('0.000001'); //low buy amoun
        const maxbuyAmount = ethers.utils.parseEther('0.000005'); //high buy amount
        const range = maxbuyAmount.sub(minbuyAmount);
        const randomBigNumber = ethers.BigNumber.from(ethers.utils.randomBytes(32));
        const scaledRandom = randomBigNumber.mod(range).add(minbuyAmount);
        const buyAmount = scaledRandom;
        const path = ['0x4200000000000000000000000000000000000006', tokenAddress];
        const deadline = Math.floor(Date.now() / 1000) + 60 * 20;
        const feeData = await provider.getFeeData();
        const gasLimit = ethers.BigNumber.from('300000');
        const maxFeePerGas = feeData.maxFeePerGas.mul(105).div(100);
        const maxPriorityFeePerGas = feeData.maxPriorityFeePerGas.mul(105).div(100);

        const uniswapRouter = new ethers.Contract(uniswapRouterAddress, uniswapRouterABI, masterWallet);

        console.log(`Attempting to buy token with wallet: ${masterwallet.address}`);
        console.log(`Buy amount: ${ethers.utils.formatEther(buyAmount)} ETH`);
        console.log(`Gas limit: ${gasLimit.toString()}`);
        console.log(`Max fee per gas: ${ethers.utils.formatUnits(maxFeePerGas, 'gwei')} gwei`);
        console.log(`Max priority fee: ${ethers.utils.formatUnits(maxPriorityFeePerGas, 'gwei')} gwei`);

        const tx = await uniswapRouter.swapExactETHForTokensSupportingFeeOnTransferTokens(
            0,
            path,
            masterwallet.address,
            deadline,
            {
                value: buyAmount,
                gasLimit: gasLimit,
                maxFeePerGas: maxFeePerGas,
                maxPriorityFeePerGas: maxPriorityFeePerGas,
            }
        );

        console.log('Transaction sent:', tx.hash);
        const receipt = await tx.wait();
        console.log('Transaction confirmed in block:', receipt.blockNumber);
        console.log(tx.buyAmount)
    } catch (error) {
        console.error('Error during token purchase:', error);
    }
}
async function sellToken(masterwallet) {
    try {
        const tokenContract = new ethers.Contract(tokenAddress, ['function balanceOf(address) view returns (uint256)', 'function approve(address, uint256) returns (bool)'], masterWallet);
        const balance = await tokenContract.balanceOf(masterwallet.address);
        const sellAmount = balance; // Sell entire balance
        const path = [tokenAddress, '0x4200000000000000000000000000000000000006'];
        const deadline = Math.floor(Date.now() / 1000) + 60 * 20;

        const feeData = await provider.getFeeData();
        const gasLimit = ethers.BigNumber.from('300000');
        const maxFeePerGas = feeData.maxFeePerGas.mul(105).div(100);
        const maxPriorityFeePerGas = feeData.maxPriorityFeePerGas.mul(105).div(100);

        const uniswapRouter = new ethers.Contract(uniswapRouterAddress, uniswapRouterABI, masterWallet);

        console.log(`Attempting to sell token with wallet: ${masterwallet.address}`);
        console.log(`Sell amount: ${ethers.utils.formatUnits(sellAmount, 18)} tokens`);
        console.log(`Gas limit: ${gasLimit.toString()}`);
        console.log(`Max fee per gas: ${ethers.utils.formatUnits(maxFeePerGas, 'gwei')} gwei`);
        console.log(`Max priority fee: ${ethers.utils.formatUnits(maxPriorityFeePerGas, 'gwei')} gwei`);

        // Approve the router to spend tokens
        const approveTx = await tokenContract.approve(uniswapRouterAddress, sellAmount);
        await approveTx.wait();
        console.log('Approval transaction confirmed');

        const tx = await uniswapRouter.swapExactTokensForETHSupportingFeeOnTransferTokens(
            sellAmount,
            0, // We don't specify a minimum amount of ETH to receive
            path,
            masterwallet.address,
            deadline,
            {
                gasLimit: gasLimit,
                maxFeePerGas: maxFeePerGas,
                maxPriorityFeePerGas: maxPriorityFeePerGas,
            }
        );

        console.log('Transaction sent:', tx.hash);
        const receipt = await tx.wait();
        console.log('Transaction confirmed in block:', receipt.blockNumber);
    } catch (error) {
        console.error('Error during token sale:', error);
    }
}

// Example usage:
// swapTokens(tokenAddress, "0xANOTHER_TOKEN_ADDRESS", ethers.utils.parseUnits("1", 18));

// Actually run the function
async function main() {
    try {
        await run_basics();
        
        // Buy tokens
        await buyToken(masterWallet);
        
        // Random delay between 5 seconds and 12 seconds
        const minDelay = 5000; // 5 seconds //CAN AMEND DELAYS
        const maxDelay = 12000; // 12 seconds //CAN AMEND DELAYS
        const randomDelay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
        console.log(`Waiting for ${randomDelay / 1000} seconds before selling...`);
        await new Promise(resolve => setTimeout(resolve, randomDelay));
        
        // Check token balance before selling
        const tokenContract = new ethers.Contract(tokenAddress, ['function balanceOf(address) view returns (uint256)'], masterWallet);
        const balance = await tokenContract.balanceOf(masterWallet.address);
        
        if (balance.gt(0)) {
            console.log(`Token balance before selling: ${ethers.utils.formatUnits(balance, 18)}`);
            await sellToken(masterWallet);
        } else {
            console.log("No tokens to sell. Skipping sell operation.");
        }
    } catch (error) {
        console.error("Error in main function:", error);
    }
}

async function loopMain() {
    while (true) {
        try {
            await main();
            console.log("Waiting for 6 seconds before next iteration...");
            await new Promise(resolve => setTimeout(resolve, 6000)); // Wait for 6 seconds
        } catch (error) {
            console.error("Error in loopMain:", error);
            console.log("Retrying in 6 seconds...");
            await new Promise(resolve => setTimeout(resolve, 6000)); // Wait for 6 second before retrying
        }
    }
}

loopMain().catch(console.error);