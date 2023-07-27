const ulCategories = document.querySelector('#categories');
console.log(`Number of categories: ${ulCategories.children.length}`);


[...ulCategories.children].forEach((item) => {
    
    const itemTitle = item.firstElementChild;
    const itemNumber = item.lastElementChild.children;

console.log(`Category: ${itemTitle.textContent}`);
console.log(`Elements: ${itemNumber.length}`);
});
