import React from 'react';
import './Blogs.css';

const Blogs = () => {
  return (
    <section id="questions-section">
      <div class="question-div">
          <h3 class="quenstion-name">What is context api ?</h3>
          <p class="answer-of-question">The Context API হল একটি রিঅ্যাক্ট স্ট্রাকচার যা data অনন্য বিবরণ আদান-প্রদান করতে সক্ষম করে | The context api মাধ্যম সমস্ত স্তর থেকে প্রপ-ড্রিলিং সমাধানে সহায়তা করে | Context provides মাধ্যম manually props drilling না করে সহজে এক জায়গা থেকে অন্য জায়গায় ডেটা পাঠাতে পারে |This is why it is so important | And It is Context APi | </p>
      </div>
      <div class="question-div">
          <h3 class="quenstion-name">What is symantic tag ?</h3>
          <p class="answer-of-question">These tags indicate what kind of data will be stored in the tag | সেই কোডটি Renader করার চেষ্টা করার পরিবর্তে, ব্রাউজার বুঝতে পারে কোন উদ্দেশ্যে কোডের উদাহরণ হিসাবে সেই tag তা use করে | এই tags গুলো ডেকে Developer খুব সহজেই বুজতে পারে যে কি ধরনের data রেখেছে | By Example: section, main, header, article, table, from, footer</p>
      </div>
      <div class="question-div">
          <h3 class="quenstion-name">What is inline, block, inline-block ?</h3>
          <p class="answer-of-question">
          Inline: Inline কোনো height and weight নেই না | Inline Just Padding নেই margin-left and margin-right নেই | margin-top and margin-bottom নেই না|   
          block: Block height, weight, padding, margin property  নেই | It starts from New Line |
          inline-block: And it will be like inline - but like the block of behavior |
          </p>
      </div>
    </section>            
  )
}

export default Blogs