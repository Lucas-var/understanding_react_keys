# What are React Keys?
A “key” is a special string attribute you need to include when creating lists of elements in React. Keys are used in React to identify which items in the list are changed, updated, or deleted. In other words, we can say that keys are used to give an identity to the elements in the lists.

## Why we shouldn’t use the index as keys? 
The quick short answer comes down to identity, when we render a list of components, Reacts wants to make sure it knows what each of these elements are, if you restructure your array Reacts wants to make sure it knows which elements are new and which ones were there from the previous render, making sure it doesn’t give excessive renders.

To see what really happens when you use index as the key, use this code and go to Dev tools, if in Windows press F12, then go to Elements and expand the div where the numbers from 1 to 10 are. See photo below.

![index_vs_id](https://user-images.githubusercontent.com/71724842/193476572-ac32cf31-136c-41d2-8710-32ba38de6943.jpg)


![react_key_1](https://user-images.githubusercontent.com/71724842/193476448-c7cabf36-5617-4c3a-a336-baca46334acc.jpg)


As you click on a number and make it be deleted from the screen, pay attention on what happens to the element in the DOM dev tool, as you click on the number, it will affect the element and purple flash what changed … that indicates that the element went through another render cycle, with the key set as index, the entire div and its elements flashes purple.

Now using the React recommendation, using an ID as the key, only the div flashes and not its elements.

That’s is why we need a stable, unique key, regardless how many times it renders.
If you delete number one for example, all the other elements within the array is going to shift up one position, which means that the item was previous in index one now it is going to be in index zero and all the other elements index will also change therefore changing their keys too so React will have to render again even though nothing actually changed.

### In short:

a key should be:

•	Unique - A key cannot be identical to that of a sibling component.

•	Static - A key should not ever change between renders.

In short, here's when you can safely use the index as key:

•	The array is static and will never change.

•	The array is never filtered (display a subset of the array).

•	The array is never reordered.

