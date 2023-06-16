import React, { useState } from "react";
import './practice.css';
import aud from '../images/m2.mp3'
import Popup from './Popup';



const Practice = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [solvedQuestions, setSolvedQuestions] = useState([]);
  const [allSolved, setAllSolved] = useState(false);

  const questions = [
    // Top 250 Interview Questions (Updated Monthly)
    "1.How do you find the missing number in a given integer array of 1 to 100?",
    "1.How do you find the missing number in a given integer array of 1 to 100?",
    "2.Reverse a String",
    "3.Check for Palindrome",
    "4.Check for Anagram",
    "5.Find the First Non-Repeated Character",
    "6.Count Vowels in a String",
    "7.Count the Number of Words in a String",
    "8.Reverse a Linked List",
    "9.Find the Middle Element of a Linked List",
    "10.Detect a Loop in a Linked List",
    "11.Merge Two Sorted Linked Lists",
    "12.Remove Duplicates from a Linked List",
    "13.Find the Nth Node from the End of a Linked List",
    "14.Implement a Stack using an Array",
    "15.Implement a Queue using an Array",
    "16.Reverse a Stack",
    "17.Implement a Stack using Linked List",
    "18.Implement a Queue using Linked List",
    "19.Implement a Circular Queue",
    "20.Implement a Binary Search Tree",
    "21.Perform a Preorder Traversal of a Binary Tree",
    "22Perform an Inorder Traversal of a Binary Tree",
    "23.Perform a Postorder Traversal of a Binary Tree",
    "24.Find the Height of a Binary Tree",
    "25.Find the Lowest Common Ancestor in a Binary Tree",
    "26.Find the Maximum Element in a Binary Tree",
    "27.Find the Sum of All Nodes in a Binary Tree",
    "28.Find the Diameter of a Binary Tree",
    "29.Implement Depth First Search (DFS)",
    "30.Implement Breadth First Search (BFS)",
    "31.Implement Dijkstra's Algorithm",
    "32.Implement the Floyd-Warshall Algorithm",
    "33.Implement the Knapsack Problem using Dynamic Programming",
    "34.Implement the Longest Common Subsequence (LCS) using Dynamic Programming",
    "35.Implement the Sieve of Eratosthenes",
    "36.Implement a Hash Table",
    "37.Implement a Priority Queue using a Min-Heap",
    "38.Implement Quick Sort",
    "39.Implement Merge Sort",
    "40.Implement Insertion Sort",
    "41.Implement Selection Sort",
    "42.Implement Bubble Sort",
    "43.Implement Radix Sort",
    "44.Implement Heap Sort",
    "45.Implement Counting Sort",
    "46.Implement Shell Sort",
    "47.Implement Topological Sorting",
    "48.Find the Intersection of Two Arrays",
    "49.Find the Union of Two Arrays",
    "50.Find the Missing Number in an Array",
    "51.Find the Duplicate Number in an Array",
    "52.Find the Smallest and Second Smallest Elements in an Array",
    "53.Find the Largest and Second Largest Elements in an Array",
    "54.Find the Maximum Subarray Sum",
    "55.Find the Longest Increasing Subsequence",
    "56.Find the Longest Common Prefix",
    "57.Find the Majority Element in an Array",
    "58.Rotate an Array",
    "59.Implement Binary Search",
    "60.Implement the Kadane's Algorithm",
    "61.Find the Missing Element in a Sorted Array",
    "62.Find the Peak Element in an Array",
    "63.Implement the Two Sum Problem",
    "64.Implement the Three Sum Problem",
    "65.Implement the Four Sum Problem",
    "66.Implement the Subarray Sum Equals K Problem",
    "67.Implement the Maximum Subarray Problem",
    "68.Implement the Maximum Product Subarray Problem",
    "69.Implement the Longest Substring Without Repeating Characters Problem",
    "70.Implement the Longest Palindromic Substring Problem",
    "71.Implement the Container With Most Water Problem",
    "72.Implement the Trapping Rain Water Problem",
    "73.Implement the String to Integer (atoi) Problem",
    "74Implement the Integer to Roman Problem",
    "75.Implement the Roman to Integer Problem",
    "Implement the ZigZag Conversion Problem",
    "Implement the Reverse Integer Problem",
    "Implement the Longest Common Prefix Problem",
    "Implement the Valid Parentheses Problem",
    "Implement the Merge Two Sorted Arrays Problem",
    "Implement the Remove Duplicates from Sorted Array Problem",
    "Implement the Remove Element Problem",
    "Implement the Next Permutation Problem",
    "Implement the Search in Rotated Sorted Array Problem",
    "Implement the Valid Sudoku Problem",
    "Implement the Sudoku Solver Problem",
    "Implement the Count and Say Problem",
    "Implement the Longest Valid Parentheses Problem",
    "Implement the Edit Distance Problem",
    "Implement the Wildcard Matching Problem",
    "Implement the Regular Expression Matching Problem",
    "Implement the Minimum Window Substring Problem",
    "Implement the Word Search Problem",
    "Implement the Median of Two Sorted Arrays Problem",
    "Implement the Longest Increasing Path in a Matrix Problem",
    "Implement the Unique Paths Problem",
    "Implement the Unique Paths II Problem",
    "Implement the Coin Change Problem",
    "Implement the Longest Consecutive Sequence Problem",
    "Implement the Longest Palindromic Subsequence Problem",
    "Implement the Maximum Sum Increasing Subsequence Problem",
    "Implement the Minimum Path Sum Problem",
    "Implement the Longest Repeating Subsequence Problem",
    "Implement the Jump Game Problem",
    "Implement the Decode Ways Problem",
    "Implement the Word Break Problem",
    "Implement the Combination Sum Problem",
    "Implement the Combination Sum II Problem",
    "Implement the Palindrome Partitioning Problem",
    "Implement the Regular Expression Matching Problem",
    "Implement the Interleaving String Problem",
    "Implement the Minimum Cost Climbing Stairs Problem",
    "Implement the Maximum Subarray Problem",
    "Implement the Best Time to Buy and Sell Stock Problem",
    "Implement the House Robber Problem",
    "Implement the Maximum Product Subarray Problem",
    "Implement the Jump Game Problem",
    "Implement the Decode Ways Problem",
    "Implement the Unique Paths Problem",
    "Implement the Unique Paths II Problem",
    "Implement the Minimum Path Sum Problem",
    "Implement the Climbing Stairs Problem",
    "Implement the Coin Change Problem",
    "Implement the Longest Increasing Subsequence Problem",
    "Implement the Longest Common Subsequence Problem",
    "Implement the Edit Distance Problem",
    "Implement the Word Break Problem",
    "Implement the Combination Sum Problem",
    "Implement the Combination Sum II Problem",
    "Implement the Palindrome Partitioning Problem",
    "Implement the Interleaving String Problem",
    "Implement the Regular Expression Matching Problem",
    "Implement the Minimum Cost Climbing Stairs Problem",
    "Implement the Maximum Subarray Problem",
    "Implement the Best Time to Buy and Sell Stock Problem",
    "Implement the House Robber Problem",
    "Implement the Maximum Product Subarray Problem",
    "Implement the Jump Game Problem",
    "Implement the Decode Ways Problem",
    "Implement the Unique Paths Problem",
    "Implement the Unique Paths II Problem",
    "Implement the Minimum Path Sum Problem",
    "Implement the Climbing Stairs Problem",
    "Implement the Coin Change Problem",
    "Implement the Longest Increasing Subsequence Problem",
    "Implement the Longest Common Subsequence Problem",
    "Implement the Edit Distance Problem",
    "Implement the Word Break Problem",
    "Implement the Combination Sum Problem",
    "Implement the Combination Sum II Problem",
    "Implement the Palindrome Partitioning Problem",
    "Implement the Interleaving String Problem",
    "Implement the Regular Expression Matching Problem",
    "Implement the Minimum Cost Climbing Stairs Problem",
    "Implement the Maximum Subarray Problem",
    "Implement the Best Time to Buy and Sell Stock Problem",
    "Implement the House Robber Problem",
    "Implement the Maximum Product Subarray Problem",
    "Implement the Jump Game Problem",
    "Implement the Decode Ways Problem",
    "Implement the Unique Paths Problem",
    "Implement the Unique Paths II Problem",
    "Implement the Minimum Path Sum Problem",
    "Implement the Climbing Stairs Problem",
    "Implement the Coin Change Problem",
    "Implement the Longest Increasing Subsequence Problem",
    "Implement the Longest Common Subsequence Problem",
    "Implement the Edit Distance Problem",
    "Implement the Word Break Problem",
    "Implement the Combination Sum Problem",
    "Implement the Combination Sum II Problem",
    "Implement the Palindrome Partitioning Problem",
    "Implement the Interleaving String Problem",
    "Implement the Regular Expression Matching Problem",
    "Implement the Minimum Cost Climbing Stairs Problem",
    "Implement the Maximum Subarray Problem",
    "Implement the Best Time to Buy and Sell Stock Problem",
    "Implement the House Robber Problem",
    "Implement the Maximum Product Subarray Problem",
    "Implement the Jump Game Problem",
    "Implement the Decode Ways Problem",
    "Implement the Unique Paths Problem",
    "Implement the Unique Paths II Problem",
    "Implement the Minimum Path Sum Problem",
    "Implement the Climbing Stairs Problem",
    "Implement the Coin Change Problem",
    "Implement the Longest Increasing Subsequence Problem",
    "Implement the Longest Common Subsequence Problem",
    "Implement the Edit Distance Problem",
    "Implement the Word Break Problem",
    "Implement the Combination Sum Problem",
    "Implement the Combination Sum II Problem",
    "Implement the Palindrome Partitioning Problem",
    "Implement the Interleaving String Problem",
    "Implement the Regular Expression Matching Problem",
    "Implement the Minimum Cost Climbing Stairs Problem",
    "Implement the Maximum Subarray Problem",
    "Implement the Best Time to Buy and Sell Stock Problem",
    "Implement the House Robber Problem",
    "Implement the Maximum Product Subarray Problem",
    "Implement the Jump Game Problem",
    "Implement the Decode Ways Problem",
    "Implement the Unique Paths Problem",
    "Implement the Unique Paths II Problem",
    "Implement the Minimum Path Sum Problem",
    "Implement the Climbing Stairs Problem",
    "Implement the Coin Change Problem",
    "Implement the Longest Increasing Subsequence Problem",
    "Implement the Longest Common Subsequence Problem",
    "Implement the Edit Distance Problem",
    "Implement the Word Break Problem",
    "Implement the Combination Sum Problem",
    "Implement the Combination Sum II Problem",
    "Implement the Palindrome Partitioning Problem",
    "Implement the Interleaving String Problem",
    "Implement the Regular Expression Matching Problem",
    "Implement the Minimum Cost Climbing Stairs Problem",
    "Implement the Maximum Subarray Problem",
    "Implement the Best Time to Buy and Sell Stock Problem",
    "Implement the House Robber Problem",
    "Implement the Maximum Product Subarray Problem",
    "Implement the Jump Game Problem",
    "Implement the Decode Ways Problem",
    "Implement the Unique Paths Problem",
    "Implement the Unique Paths II Problem",
    "Implement the Minimum Path Sum Problem",
    "Implement the Climbing Stairs Problem",
    "Implement the Coin Change Problem",
    "Implement the Longest Increasing Subsequence Problem",
    "Implement the Longest Common Subsequence Problem",
    "Implement the Edit Distance Problem",
    "Implement the Word Break Problem",
    "Implement the Combination Sum Problem",
    "Implement the Combination Sum II Problem",
    "Implement the Palindrome Partitioning Problem",
    "Implement the Interleaving String Problem",
    "Implement the Regular Expression Matching Problem",
    "Implement the Minimum Cost Climbing Stairs Problem",
    "Implement the Maximum Subarray Problem",
    "Implement the Best Time to Buy and Sell Stock Problem",
    "Implement the House Robber Problem",
    "Implement the Maximum Product Subarray Problem",
    "Implement the Jump Game Problem",
    "Implement the Decode Ways Problem",
    "Implement the Unique Paths Problem",
    "Implement the Unique Paths II Problem",
    "Implement the Minimum Path Sum Problem",
    "Implement the Climbing Stairs Problem",
    "Implement the Coin Change Problem",
    "Implement the Longest Increasing Subsequence Problem",
    "Implement the Longest Common Subsequence Problem",
    "Implement the Edit Distance Problem",
    "Implement the Word Break Problem",
    "Implement the Combination Sum Problem",
    "Implement the Combination Sum II Problem",
    "Implement the Palindrome Partitioning Problem",
    "Implement the Interleaving String Problem",
    "Implement the Regular Expression Matching Problem",
    "Implement the Minimum Cost Climbing Stairs Problem",
    "Implement the Maximum Subarray Problem",
    "Implement the Best Time to Buy and Sell Stock Problem",
    "Implement the House Robber Problem",
    "Implement the Maximum Product Subarray Problem",
    "Implement the Jump Game Problem",
    "Implement the Decode Ways Problem",
    "Implement the Unique Paths Problem",
    "Implement the Unique Paths II Problem",
    "240.Implement the Minimum Path Sum Problem",
    "241.Implement the Climbing Stairs Problem",
    "242.Implement the Coin Change Problem",
    "243.Implement the Longest Increasing Subsequence Problem",
    "244.Implement the Longest Common Subsequence Problem",
    "244.Implement the Edit Distance Problem",
    "245.Implement the Word Break Problem",
    "245.Implement the Combination Sum Problem",
    "246.Implement the Combination Sum II Problem",
    "247.Implement the Palindrome Partitioning Problem",
    "248.Implement the Interleaving String Problem",
    "248.Implement the Interleaving String Problem"
  ];

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setAllSolved(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSolveQuestion = () => {
    setSolvedQuestions([...solvedQuestions, currentQuestion]);
  };

  const handleButtonClick = () => {
    const audio = new Audio(aud);
    audio.play();

    setTimeout(() => {
      audio.pause();
      audio.currentTime = 0;
    }, 5000);
  };

  return (
    <div className="containerq">
      <h1 className="lookw">Top 250 Interview Questions ask in Top Tech (Updated Monthly)</h1>
      {allSolved ? (
        <div>
          <h2>Love ❤️</h2>
          <p>God bless you!</p>
        </div>
      ) : (
        <div>
          <h3 className="questionq">{questions[currentQuestion]}</h3>
        
          <button className="Previos-btn" onClick={handlePreviousQuestion}>Prev.</button>
          <br></br>
          <button className="next-btn" onClick={() => { handleButtonClick(); handleNextQuestion(); }}>Next.</button>
         
        </div>
        
      )}
      <br></br>
     
       <Popup/>

    </div>
  );
}

export default Practice;



