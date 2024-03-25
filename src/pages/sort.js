
<div>





<h3>
    Why sort? What is easier to do when things are sorted? How do you sort files? 

    How many possible ways could we sort? 

    What is runtime complexity sort? 
    What is space complexity sort? 

    What is the worst sort? 

    what is recursion? 
</h3>

<h4>
why sort? 
is it easier to add things to remove and find things? 
how do sort files in our folder? 

How many possible ways could we sort something? 
can we sort by runtime complexity? what did we do? 
what about space? 
what is comparison? distribution? stable? unstable? 

What is a comparison sort? what are some ways to compare two items? How could we decide to go first? 
is there a difference in terms of categorization between z-a or a-z? 


What is distribution? WHAT ARE SOME TYPES? HOW CAN WE SORT BY USING A PROPERTY OF AN ITEM TO DECIDE HOW TI SHOULD BE SORTED?

What is stable? why might we consider something preserving the relative order of a collected as stable?

what is stable versus unstbale? what is STABLE VERSUS unstable



</h4>
<h5>
    why sort? why do we sort? like if you . have a library and its unsorted and i ask to find a book? is that easier than not? 

  how do weclassify sort algos? we'll lvearn space and itme compleixty between them and some new terms
  comparison distribution stable or unstable what are those 

  what is a comparisoin? if you say you want to alphabet things and we look at two things is it fair to say we're comparing hte laeter they start with? like if i say to z-a or a-z is that like not comparison? no its liek more the action itself then the act? 

  what is distrubtion? i mean use the word? how do we dsitrubte this? if you go grocery shopping and you have all the different places in your fridge and youre putting your gorceries in different things is it fair to say you're distrubitng? oyure not comparing, youre saying this thing is going into different things. 

  what is stable? what iS GA? I DON TUNDERSTAND STBALE VS unstable

  there's selection sort, bubble, sort, merge sort 

  lets look at this table this is a good cheat sheet -

  theyre' all comparison sorts? so what is that best for what types of data sets? what are we goign to talk about? what does this mean for space complexity? what is 0(1) in place what is of n out of place? 
  and then the most importnat thing? Time Complexity. what do we want to focus on? worst!
  so what cna you tell about these four? yeah insertion, bubble, and selection are all baaad. but merge is great! so in true big 0 fashion lets start with the worsts. the terrible. selection, bubble and insertion. what makes these terrible? as the data increases what happens? it gets squared? so what can we generically say? they probably all od something while something else is happenign? now its not bad in the snese it wont do it but we are recongizng at least the complexity. so lets look at some expals 

{/* 
  const fakeTwoDimensionArray = [[1], [2], [3], [4], [5, 6, 7]]

logArray(fakeTwoDimensionArray)

function logArray(arr) {
  for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
    for(let j = 0; j < arr.length; j++){
      console.log("i: ", arr[i], "j: ", arr[j])
    }
  }
} */}

  we see selection sort is unstable? why might that be? what makes the others stable? 

  What is selection sort doing, its' picking a candidate. its sayign are you the lowest number? I want to find the lowest number and I wont' decide on who the winner is until i go through everyone. then when I do decide okay great I put that and now I do it again wihtout any memory of previous! how horrible. dont want to spend time. get the stench off. 

  sleeceiton sort - so iterate through the list and while you do, you store array at index into lowest value and if lowest value is greater i +1 then store i +1 into lowest vlaue 


what is buble sort? 
do it go to zero everytime? 

create varibale for swap counter? 
</h5>
</div>

