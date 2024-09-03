import React from 'react';
import ArticlePreview from './components/ArticlePreview';
import image from './images/drawers.jpg';
import authorImage from './images/avatar-michelle.jpg';

const App: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <ArticlePreview
        image={image}
        title="Shift the overall look and feel by adding these wonderful touches to furniture in your home"
        description="Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete."
        author="Michelle Appleton"
        date="28 Jun 2020"
        authorImage={authorImage}
      />
    </div>
  );
};

export default App;
