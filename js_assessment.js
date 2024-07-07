/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/
// create a variable to hold your NFT's
let NFTs=[];


// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (nft_name, name, eye_color, age, fav_color, height) {
	let nft={"name": name, "eye color": eye_color, "age": age, "fav color": fav_color, "height": height};
	NFTs.push([nft_name, nft]);
}


// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
	for(let i=0; i<NFTs.length; i++){
		console.log(NFTs[i][0]);
		console.log("\tName =", NFTs[i][1].name);
		console.log("\tEye color =", NFTs[i][1] ["eye color"]);
		console.log("\tAge =", NFTs[i][1].age);
		console.log("\tFavourite Color =", NFTs[i][1] ["fav color"]);
		console.log("\tHeight =", NFTs[i][1].height + "\n");
	}
}


// print the total number of NFTs we have minted to the console
function getTotalSupply() {
	return NFTs.length;
}


// call your functions below this line
mintNFT("NFT1", "Andrew", "Brown", 19, "Brown", 155);
mintNFT("NFT2", "Bret", "Blue", 29, "White", 160);
mintNFT("NFT3", "Steyn", "Black", 25, "Royal Blue", 166);

listNFTs();

console.log("Number of NFT's Minted =",getTotalSupply());