const ulCategories = document.querySelector('#categories');
console.log(`Number of categories: ${ulCategories.children.length}`);


[...ulCategories.children].forEach((item) => {
    
    const itemTitle = item.querySelector("h2");
    const itemNumber = item.querySelectorAll("li");

console.log(`Category: ${itemTitle.textContent}`);
console.log(`Elements: ${itemNumber.length}`);
});
