import React from 'react'

const About = () => {
  return (
    <section className='container mt-5'>
      <div className='row row-cols-lg-2 row-cols-1 gx-5 pt-5'>
        <div className='col'>
          <h1 className='mb-6 font-light'>
            <b>Basic Questions</b>
          </h1>
          <p className='mt-10 mb-3'>
            <b>What is accessibility?</b>
          </p>
          <p className='text-gray-600'>
            This article starts off the module with a good look at what
            accessibility is — this includes what groups of people we need to
            consider and why, what tools different people use to interact with
            the web, and how we can make accessibility part of our web
            development workflow.
          </p>
          <p className='mt-10 mb-3'>
            <b>HTML: A good basis for accessibility?</b>
          </p>
          <p className=''>
            A great deal of web content can be made accessible just by making
            sure the correct HTML elements are always used for the correct
            purpose.
          </p>
          <p className='mt-10 mb-3'>
            <b>CSS and JavaScript accessibility best practices?</b>
          </p>
          <p className=''>
            CSS and JavaScript, when used properly, also have the potential to
            allow for accessible web experiences, but if misused they can
            significantly harm accessibility. This article outlines some CSS and
            JavaScript best practices that should be considered to ensure that
            even complex content is as accessible as possible.
          </p>
        </div>
        <div className='col'>
          <h1 className='mb-6 '>
            <b>Advanced Questions</b>
          </h1>
          <p className='mt-10 mb-3'>
            <b>WAI-ARIA basics, WAI-ARIA basics, WAI-ARIA basics, WAI-ARIA basics?</b>
          </p>
          <p className=''>
            Following on from the previous article, sometimes making complex UI
            controls that involve unsemantic HTML and dynamic JavaScript-updated
            content can be difficult. WAI-ARIA is a technology that can help
            with such problems by adding in further semantics that browsers and
            assistive technologies can recognize and use to let users know what
            is going on. Here we'll show how to use it at a basic level to
            improve accessibility.
          </p>
          <p className='mt-10 mb-3'>
            <b>Accessible multimedia?</b>
          </p>
          <p className=''>
            Another category of content that can create accessibility problems
            is multimedia — video, audio, and image content need to be given
            proper textual alternatives, so they can be understood by assistive
            technologies and their users. This article shows how.
          </p>
          <p className='mt-10 mb-3'>
            <b>Mobile accessibility?</b>
          </p>
          <p className=''>
            With web access on mobile devices being so popular, and popular
            platforms such as iOS and Android.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
