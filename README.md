# Integration-FAQs
Custom accordion list from scratch. Needs polishing.

#Internal Project
Basically this is here because I have no other repositories. 
The entire project will never be visible (sorry), as it is on
my employer's intranet.
But I definitely want to improve it and wouldn't mind a few 
pointers, especially from other Front-End Devs who are well-versed 
in Kentico CMS (version 8+).

#Project Background
This list of FAQs contained 52 questions, so I created a Page Type in order to be able to manage changes in the future. 
Each question has 3 fields: QuestionID (hidden), Question and Answer. 

At runtime, Kentico spits out each question through a repeater, into an ordered list.

The transition wraps each question with a list item assigned with a class of .question, and adds an automatically generated ID (QuestionID).

My job was to turn the list of questions into an accordion list, and add pop-ups whenever an answer to a question referenced another question.

The IDs that I have listed belong to the 5 answers that were referenced by other answers.
