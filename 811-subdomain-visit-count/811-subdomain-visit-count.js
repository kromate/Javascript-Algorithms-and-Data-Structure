/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */

/**
Below are the steps to solve this problem
- create a psuedo visitCount hashmap
- loop through the given cpdomains
- use the .split() string method to find out the count and the domain
- create an array of subdomain using the .split(".") on the domain gotten from the above step
- create a while loop to run through the subdomain array and for each iteration remove the first element using the javascript shift method
    - within the while loop join the subdomain using .join(".")
    - check if the domain already exist in the hashmap,if true add to the count else set the count
    
- return an array by looping through the keys using object.keys() and string literal
 */
var subdomainVisits = function(cpdomains) {
    	let visitCounts = {};
		for (let i = 0; i < cpdomains.length; i++) {
			// Split visits and domains by the space
			const [visits, domains] = cpdomains[i].split(" ");

			// Create array of subdomains in domain
			let subdomains = domains.split(".");

			while (subdomains.length) {
				// Join all items in subdomains array
				let subdomain = subdomains.join('.');

				// If subdomain already exists in object, add to existing count
				visitCounts[subdomain] = visitCounts.hasOwnProperty(subdomain) ?
					Number(visitCounts[subdomain]) + Number(visits) :
					visits;

				// Remove first subdomain from array
				subdomains.shift();
			}
		}

		return Object.keys(visitCounts).map((key) => `${visitCounts[key]} ${key}`);
};