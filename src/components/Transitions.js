//GSAP
import { TimelineMax as Timeline, Power1 } from 'gsap';

const getDefaultTimeline = (node, delay) => {
  const timeline = new Timeline({
    paused: true
  });
  const header = node.querySelector('header');

  timeline
    .from(node, 0.2, {
      delay,
      ease: Power1.easeIn, 
      display: 'none',
      autoAlpha: 0,
    })
    .from(header, 0.15, {
      ease: Power1.easeInOut, 
      autoAlpha: 0,
      y: -25, 
    }, '-=0.2')

  return timeline;
}

const getHomeTimeline = (node, delay) => {
  const timeline = new Timeline({
    paused: true
  });
  const header = node.querySelector('header');

  timeline
    .from(node, 0.2, {
      delay,
      ease: Power1.easeIn,
      display: 'none',
      autoAlpha: 0,
    })
    .from(header, 0.15, {
      ease: Power1.easeInOut,
      autoAlpha: 0,
      y: 25,
    }, '-=0.2')
    //.staggerFrom(texts, 0.375, { autoAlpha: 0, x: -25, ease: Power1.easeOut }, 0.125);

  return timeline;
}

export const play = (pathname, node, appears) => {
  const delay = appears ? 0 : 0.2;
  let timeline

  if (pathname === '/')
    timeline = getHomeTimeline(node, delay);
  else
    timeline = getDefaultTimeline(node, delay);

  timeline.play()
}

export const exit = (node) => {
  const timeline = new Timeline({
    paused: true
  });
  
  timeline.to(node, 0.15, {
    ease: Power1.easeOut,
    autoAlpha: 0,
  });
  timeline.play();
}