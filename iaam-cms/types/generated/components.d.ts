import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsAboutCards extends Struct.ComponentSchema {
  collectionName: 'components_sections_about_cards';
  info: {
    displayName: 'about_cards';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface SectionsAboutSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_about_sections';
  info: {
    displayName: 'aboutSection';
  };
  attributes: {
    about_cards: Schema.Attribute.Component<'sections.about-cards', true>;
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsCards extends Struct.ComponentSchema {
  collectionName: 'components_sections_cards';
  info: {
    displayName: 'cards';
  };
  attributes: {
    description: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<['primary', 'light']>;
  };
}

export interface SectionsEvents extends Struct.ComponentSchema {
  collectionName: 'components_sections_events';
  info: {
    displayName: 'events';
  };
  attributes: {
    day: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    month: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsEventsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_events_sections';
  info: {
    displayName: 'eventsSection';
  };
  attributes: {
    events: Schema.Attribute.Component<'sections.events', true>;
    leftSubmit: Schema.Attribute.Component<'sections.left-submit', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsJoinSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_join_sections';
  info: {
    displayName: 'joinSection';
  };
  attributes: {
    cards: Schema.Attribute.Component<'sections.cards', true>;
    description: Schema.Attribute.Blocks;
    leftCard: Schema.Attribute.Component<'sections.left-card', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsLeftCard extends Struct.ComponentSchema {
  collectionName: 'components_sections_left_cards';
  info: {
    displayName: 'leftCard';
  };
  attributes: {
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsLeftSubmit extends Struct.ComponentSchema {
  collectionName: 'components_sections_left_submits';
  info: {
    displayName: 'leftSubmit';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    paragraph1: Schema.Attribute.Text;
    paragraph2: Schema.Attribute.Text;
    primaryButtonLink: Schema.Attribute.String;
    primaryButtonText: Schema.Attribute.String;
    secondaryButtonLink: Schema.Attribute.String;
    secondaryButtonText: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsLeftSummit extends Struct.ComponentSchema {
  collectionName: 'components_sections_left_summits';
  info: {
    displayName: 'leftSummit';
  };
  attributes: {};
}

export interface SectionsNewsItems extends Struct.ComponentSchema {
  collectionName: 'components_sections_news_items';
  info: {
    displayName: 'newsItems';
  };
  attributes: {
    date: Schema.Attribute.DateTime;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsNewsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_news_sections';
  info: {
    displayName: 'newsSection';
  };
  attributes: {
    allArticlesLink: Schema.Attribute.String;
    allArticlesText: Schema.Attribute.Blocks;
    featuredDescription: Schema.Attribute.Blocks;
    featuredImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    featuredTitle: Schema.Attribute.String;
    newsItems: Schema.Attribute.Component<'sections.news-items', true>;
    newsletterButtonLink: Schema.Attribute.String;
    newsletterButtonText: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sections.about-cards': SectionsAboutCards;
      'sections.about-section': SectionsAboutSection;
      'sections.cards': SectionsCards;
      'sections.events': SectionsEvents;
      'sections.events-section': SectionsEventsSection;
      'sections.hero': SectionsHero;
      'sections.join-section': SectionsJoinSection;
      'sections.left-card': SectionsLeftCard;
      'sections.left-submit': SectionsLeftSubmit;
      'sections.left-summit': SectionsLeftSummit;
      'sections.news-items': SectionsNewsItems;
      'sections.news-section': SectionsNewsSection;
    }
  }
}
