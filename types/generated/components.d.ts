import type { Schema, Attribute } from '@strapi/strapi';

export interface ComposantsTitre extends Schema.Component {
  collectionName: 'components_composants_titres';
  info: {
    displayName: 'Titre';
    icon: 'strikeThrough';
    description: '';
  };
  attributes: {
    titre: Attribute.String & Attribute.DefaultTo<'Votre Titre'>;
    taille: Attribute.Enumeration<['h1', 'h2', 'h3', 'h4', 'h5', 'h6']> &
      Attribute.Required &
      Attribute.DefaultTo<'h3'>;
    position: Attribute.Enumeration<['Gauche', 'Centre', 'Droite']> &
      Attribute.Required &
      Attribute.DefaultTo<'Gauche'>;
    page_cible: Attribute.String;
    titre_du_lien: Attribute.String;
    espacement_bas: Attribute.Enumeration<
      ['d\u00E9faut', 'px8', 'px16', 'px32', 'px48', 'px64']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'d\u00E9faut'>;
  };
}

export interface ComposantsTelechargement extends Schema.Component {
  collectionName: 'components_composants_telechargements';
  info: {
    displayName: 'Liens-telechargement';
    icon: 'exit';
    description: '';
  };
  attributes: {
    titre_de_la_liste: Attribute.String;
    Lien_telechargement: Attribute.Component<
      'composants.lien-telechargement',
      true
    >;
    position: Attribute.Enumeration<['Gauche', 'Centre', 'Droite']> &
      Attribute.Required &
      Attribute.DefaultTo<'Centre'>;
    espacement_bas: Attribute.Enumeration<
      ['d\u00E9faut', 'px8', 'px16', 'px32', 'px48', 'px64']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'d\u00E9faut'>;
  };
}

export interface ComposantsSection extends Schema.Component {
  collectionName: 'components_composants_sections';
  info: {
    displayName: 'Section';
    icon: 'apps';
    description: '';
  };
  attributes: {
    elements_par_ligne: Attribute.Enumeration<['Deux', 'Trois']> &
      Attribute.Required &
      Attribute.DefaultTo<'Deux'>;
    espacement_bas: Attribute.Enumeration<
      ['d\u00E9faut', 'px8', 'px16', 'px32', 'px48', 'px64']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'d\u00E9faut'>;
  };
}

export interface ComposantsNavigation extends Schema.Component {
  collectionName: 'components_composants_navigations';
  info: {
    displayName: 'Navigation';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    ancre: Attribute.Component<'composants.ancre', true>;
  };
}

export interface ComposantsMiseEnAvant extends Schema.Component {
  collectionName: 'components_composants_mise_en_avants';
  info: {
    displayName: 'Mise-en-avant';
    icon: 'expand';
    description: '';
  };
  attributes: {
    titre: Attribute.String;
    texte: Attribute.Text;
    afficher_pictogramme: Attribute.Boolean;
    titre_du_bouton: Attribute.String;
    lien_du_bouton: Attribute.String;
    espacement_bas: Attribute.Enumeration<
      ['d\u00E9faut', 'px8', 'px16', 'px32', 'px48', 'px64']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'d\u00E9faut'>;
    pictogramme_remixicon: Attribute.Text;
  };
}

export interface ComposantsMegaMenuNavbar extends Schema.Component {
  collectionName: 'components_composants_mega_menu_navbars';
  info: {
    displayName: 'Mega-Menu-Navbar';
    icon: 'apps';
    description: '';
  };
  attributes: {
    titre_du_menu: Attribute.String & Attribute.Required;
    titre_editorialise: Attribute.String;
    texte_de_presentation: Attribute.String;
    categories: Attribute.Component<
      'composants.categorie-navbar-mega-menu',
      true
    >;
    liens: Attribute.Component<'composants.lien-navbar-mega-menu', true>;
  };
}

export interface ComposantsMedia extends Schema.Component {
  collectionName: 'components_composants_media';
  info: {
    displayName: 'Media';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    taille: Attribute.Enumeration<['Petit', 'Moyen', 'Grand']> &
      Attribute.Required &
      Attribute.DefaultTo<'Moyen'>;
    description: Attribute.String & Attribute.DefaultTo<'Votre description'>;
    transcription: Attribute.Text;
    transcription_ouverte: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    position: Attribute.Enumeration<['Gauche', 'Centre']> &
      Attribute.Required &
      Attribute.DefaultTo<'Centre'>;
    lien_video: Attribute.String;
    afficher_transcription: Attribute.Enumeration<['Oui', 'Non']> &
      Attribute.Required &
      Attribute.DefaultTo<'Oui'>;
    espacement_bas: Attribute.Enumeration<
      ['d\u00E9faut', 'px8', 'px16', 'px32', 'px48', 'px64']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'d\u00E9faut'>;
  };
}

export interface ComposantsLiensFooter extends Schema.Component {
  collectionName: 'components_composants_liens_footers';
  info: {
    displayName: 'Liens-footer';
    icon: 'apps';
    description: '';
  };
  attributes: {
    type_de_composant: Attribute.Enumeration<['liens-footer']> &
      Attribute.Required &
      Attribute.DefaultTo<'liens-footer'>;
    liens_footer: Attribute.Component<'composants.lien-footer', true>;
  };
}

export interface ComposantsLien extends Schema.Component {
  collectionName: 'components_composants_liens';
  info: {
    displayName: 'Lien-Navbar';
    icon: 'exit';
    description: '';
  };
  attributes: {
    titre_du_lien: Attribute.String & Attribute.Required;
    page_cible: Attribute.String & Attribute.Required;
  };
}

export interface ComposantsLienTelechargement extends Schema.Component {
  collectionName: 'components_composants_lien_telechargements';
  info: {
    displayName: 'Lien-telechargement';
    icon: 'exit';
    description: '';
  };
  attributes: {
    texte_du_lien: Attribute.String;
    media_a_telecharger: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    actif: Attribute.Enumeration<['Oui', 'Non']> &
      Attribute.Required &
      Attribute.DefaultTo<'Oui'>;
  };
}

export interface ComposantsLienNavbarMegaMenu extends Schema.Component {
  collectionName: 'components_composants_lien_navbar_mega_menus';
  info: {
    displayName: 'Lien-Navbar-Mega-Menu';
    icon: 'grid';
  };
  attributes: {
    titre_de_la_categorie: Attribute.String & Attribute.Required;
    titre_du_lien: Attribute.String & Attribute.Required;
    page_cible: Attribute.String & Attribute.Required;
  };
}

export interface ComposantsLienHypertexte extends Schema.Component {
  collectionName: 'components_composants_lien_hypertextes';
  info: {
    displayName: 'Lien-hypertexte';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    texte: Attribute.String & Attribute.Required;
    page_cible: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'https://'>;
    taille: Attribute.Enumeration<['Petit', 'Moyen', 'Grand']> &
      Attribute.Required &
      Attribute.DefaultTo<'Moyen'>;
    position: Attribute.Enumeration<['Gauche', 'Centre', 'Droite']> &
      Attribute.Required &
      Attribute.DefaultTo<'Gauche'>;
    espacement_bas: Attribute.Enumeration<
      ['d\u00E9faut', 'px8', 'px16', 'px32', 'px48', 'px64']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'d\u00E9faut'>;
  };
}

export interface ComposantsLienHeader extends Schema.Component {
  collectionName: 'components_composants_lien_headers';
  info: {
    displayName: 'lien-header';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    titre_du_lien: Attribute.String;
    page_cible: Attribute.String;
    pictogramme_remixicon: Attribute.Text;
  };
}

export interface ComposantsLienFooter extends Schema.Component {
  collectionName: 'components_composants_lien_footers';
  info: {
    displayName: 'lien-footer';
    icon: 'arrowRight';
  };
  attributes: {
    titre_du_lien: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Cliquez ici'>;
    url: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'https://www.google.fr'>;
  };
}

export interface ComposantsLiaison extends Schema.Component {
  collectionName: 'components_composants_liaisons';
  info: {
    displayName: 'liaison';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    liaison: Attribute.Enumeration<
      ['axe-1', 'axe-2', 'axe-3', 'axe-4', 'engagement-transverse']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'axe-1'>;
    titre: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Mon axe'>;
  };
}

export interface ComposantsLabel extends Schema.Component {
  collectionName: 'components_composants_labels';
  info: {
    displayName: 'Label';
    icon: 'bold';
    description: '';
  };
  attributes: {
    titre_du_label: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Mon label'>;
    couleur_du_label: Attribute.Enumeration<['D\u00E9faut']> &
      Attribute.Required &
      Attribute.DefaultTo<'D\u00E9faut'>;
  };
}

export interface ComposantsIframe extends Schema.Component {
  collectionName: 'components_composants_iframes';
  info: {
    displayName: 'Iframe';
    icon: 'expand';
    description: '';
  };
  attributes: {
    taille_horizontale: Attribute.Enumeration<['px300', 'px600', 'px900']> &
      Attribute.Required &
      Attribute.DefaultTo<'px600'>;
    position: Attribute.Enumeration<['Gauche', 'Centre']> &
      Attribute.Required &
      Attribute.DefaultTo<'Centre'>;
    source: Attribute.String & Attribute.Required;
    bords: Attribute.Enumeration<['Arrondis', 'Carr\u00E9s']> &
      Attribute.Required &
      Attribute.DefaultTo<'Carr\u00E9s'>;
    taille_verticale: Attribute.Enumeration<['py300', 'py600', 'py900']> &
      Attribute.Required &
      Attribute.DefaultTo<'py600'>;
    espacement_bas: Attribute.Enumeration<
      ['d\u00E9faut', 'px8', 'px16', 'px32', 'px48', 'px64']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'d\u00E9faut'>;
  };
}

export interface ComposantsGroupeDeBoutons extends Schema.Component {
  collectionName: 'components_composants_groupe_de_boutons';
  info: {
    displayName: 'Groupe-de-boutons';
    icon: 'apps';
    description: '';
  };
  attributes: {
    groupe_de_boutons: Attribute.Component<'composants.bouton', true> &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 3;
        },
        number
      >;
    position: Attribute.Enumeration<['Gauche', 'Centre', 'Droite']> &
      Attribute.Required &
      Attribute.DefaultTo<'Centre'>;
    espacement_entre_les_boutons: Attribute.Enumeration<
      ['px 4', 'px 8', 'px 12', 'px 16']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'px 8'>;
    espacement_bas: Attribute.Enumeration<
      ['d\u00E9faut', 'px8', 'px16', 'px32', 'px48', 'px64']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'d\u00E9faut'>;
  };
}

export interface ComposantsFluxOutils extends Schema.Component {
  collectionName: 'components_composants_flux_outils';
  info: {
    displayName: 'Flux-outils';
    icon: 'apps';
  };
  attributes: {
    type_element: Attribute.Enumeration<['flux-outils']> &
      Attribute.Required &
      Attribute.DefaultTo<'flux-outils'>;
  };
}

export interface ComposantsFluxDispositifs extends Schema.Component {
  collectionName: 'components_composants_flux_dispositifs';
  info: {
    displayName: 'Flux-dispositifs';
    icon: 'apps';
    description: '';
  };
  attributes: {
    type_element: Attribute.Enumeration<['flux-dispositifs']> &
      Attribute.Required &
      Attribute.DefaultTo<'flux-dispositifs'>;
  };
}

export interface ComposantsFluxDePublications extends Schema.Component {
  collectionName: 'components_composants_flux_de_publications';
  info: {
    displayName: 'flux-de-publications';
    icon: 'information';
    description: '';
  };
  attributes: {
    titre: Attribute.String;
    espacement_bas: Attribute.Enumeration<
      ['d\u00E9faut', 'px8', 'px16', 'px32', 'px48', 'px64']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'d\u00E9faut'>;
  };
}

export interface ComposantsFluxActualite extends Schema.Component {
  collectionName: 'components_composants_flux_actualite';
  info: {
    displayName: 'Flux-actualit\u00E9';
    icon: 'layer';
    description: '';
  };
  attributes: {
    titre: Attribute.String;
    espacement_bas: Attribute.Enumeration<
      ['d\u00E9faut', 'px8', 'px16', 'px32', 'px48', 'px64']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'d\u00E9faut'>;
  };
}

export interface ComposantsFinDeSection extends Schema.Component {
  collectionName: 'components_composants_fin_de_sections';
  info: {
    displayName: 'Fin-de-Section';
    icon: 'filter';
    description: '';
  };
  attributes: {
    titre: Attribute.String & Attribute.DefaultTo<'Fin de section'>;
  };
}

export interface ComposantsDeroulantNavbar extends Schema.Component {
  collectionName: 'components_composants_deroulant_navbars';
  info: {
    displayName: 'Deroulant-Navbar';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    titre_du_menu: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Titre du menu'>;
    liens: Attribute.Component<'composants.lien', true>;
  };
}

export interface ComposantsCitation extends Schema.Component {
  collectionName: 'components_composants_citations';
  info: {
    displayName: 'Citation';
    icon: 'quote';
    description: '';
  };
  attributes: {
    citation: Attribute.Text;
    auteur: Attribute.String;
    contexte: Attribute.String;
    image: Attribute.Media<'images'>;
    espacement_bas: Attribute.Enumeration<
      ['d\u00E9faut', 'px8', 'px16', 'px32', 'px48', 'px64']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'d\u00E9faut'>;
  };
}

export interface ComposantsChampDeBlocs extends Schema.Component {
  collectionName: 'components_composants_champ_de_blocs';
  info: {
    displayName: 'Champ-de-blocs';
    icon: 'archive';
    description: '';
  };
  attributes: {
    titre: Attribute.String;
    Bloc_simple: Attribute.Component<'composants.bloc-simple', true>;
    espacement_bas: Attribute.Enumeration<
      ['d\u00E9faut', 'px8', 'px16', 'px32', 'px48', 'px64']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'d\u00E9faut'>;
  };
}

export interface ComposantsCategorieNavbarMegaMenu extends Schema.Component {
  collectionName: 'components_composants_categorie_navbar_mega_menus';
  info: {
    displayName: 'Categorie-Navbar-Mega-Menu';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    titre_de_la_categorie: Attribute.String & Attribute.Required;
    page_cible: Attribute.String;
  };
}

export interface ComposantsCarteVerticale extends Schema.Component {
  collectionName: 'components_composants_carte_verticales';
  info: {
    displayName: 'Carte-verticale';
    icon: 'filePdf';
    description: '';
  };
  attributes: {
    titre: Attribute.String & Attribute.DefaultTo<'Titre'>;
    lien: Attribute.String & Attribute.DefaultTo<'https://www.google.fr'>;
    titre_du_lien: Attribute.String & Attribute.DefaultTo<'Cliquez ici'>;
    image: Attribute.Media<'images'>;
    position: Attribute.Enumeration<['Gauche', 'Centre']> &
      Attribute.Required &
      Attribute.DefaultTo<'Centre'>;
    labels: Attribute.Component<'composants.label', true>;
    taille: Attribute.Enumeration<['Petit', 'Moyen', 'Grand']> &
      Attribute.Required &
      Attribute.DefaultTo<'Moyen'>;
    texte_en_valeur: Attribute.String;
    texte: Attribute.Text;
    espacement_bas: Attribute.Enumeration<
      ['d\u00E9faut', 'px8', 'px16', 'px32', 'px48', 'px64']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'d\u00E9faut'>;
  };
}

export interface ComposantsCarteTelechargement extends Schema.Component {
  collectionName: 'components_composants_carte_telechargements';
  info: {
    displayName: 'Carte-telechargement';
    icon: 'grid';
    description: '';
  };
  attributes: {
    image_de_la_carte: Attribute.Media<'images'>;
    titre_de_la_carte: Attribute.String;
    description_de_la_carte: Attribute.String;
    media_a_telecharger: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    position: Attribute.Enumeration<['Gauche', 'Centre', 'Droite']> &
      Attribute.Required &
      Attribute.DefaultTo<'Centre'>;
    taille: Attribute.Enumeration<['Petit', 'Grand']> &
      Attribute.Required &
      Attribute.DefaultTo<'Grand'>;
    label: Attribute.Component<'composants.label'>;
    espacement_bas: Attribute.Enumeration<
      ['d\u00E9faut', 'px8', 'px16', 'px32', 'px48', 'px64']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'d\u00E9faut'>;
  };
}

export interface ComposantsCarteHorizontale extends Schema.Component {
  collectionName: 'components_composants_carte_horizontales';
  info: {
    displayName: 'Carte-horizontale';
    icon: 'picture';
    description: '';
  };
  attributes: {
    titre: Attribute.String & Attribute.DefaultTo<'Titre'>;
    lien: Attribute.String & Attribute.DefaultTo<'https://www.google.fr'>;
    titre_du_lien: Attribute.String & Attribute.DefaultTo<'Cliquez ici'>;
    image: Attribute.Media<'images'>;
    labels: Attribute.Component<'composants.label', true>;
    texte_en_valeur: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 24;
      }>;
    texte: Attribute.Text;
    position: Attribute.Enumeration<['Gauche', 'Centre']> &
      Attribute.Required &
      Attribute.DefaultTo<'Gauche'>;
    espacement_bas: Attribute.Enumeration<
      ['d\u00E9faut', 'px8', 'px16', 'px32', 'px48', 'px64']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'d\u00E9faut'>;
  };
}

export interface ComposantsCarteDeroulante extends Schema.Component {
  collectionName: 'components_composants_carte_deroulantes';
  info: {
    displayName: 'Carte-deroulante';
    icon: 'layer';
    description: '';
  };
  attributes: {
    texte_du_bouton: Attribute.String;
    lien_du_bouton: Attribute.String;
    texte: Attribute.RichText;
    bloc_deroulant: Attribute.Component<'composants.bloc-deroulant', true>;
    espacement_bas: Attribute.Enumeration<
      ['d\u00E9faut', 'px8', 'px16', 'px32', 'px48', 'px64']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'d\u00E9faut'>;
  };
}

export interface ComposantsBouton extends Schema.Component {
  collectionName: 'components_composants_boutons';
  info: {
    displayName: 'Bouton';
    icon: 'exit';
    description: '';
  };
  attributes: {
    texte: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Mon Bouton'>;
    page_cible: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'https://'>;
    couleur: Attribute.Enumeration<['bleu', 'blanc']> &
      Attribute.Required &
      Attribute.DefaultTo<'bleu'>;
    position: Attribute.Enumeration<['Gauche', 'Centre', 'Droite']> &
      Attribute.Required &
      Attribute.DefaultTo<'Centre'>;
    taille: Attribute.Enumeration<['Petit', 'Moyen', 'Grand']> &
      Attribute.Required &
      Attribute.DefaultTo<'Moyen'>;
    afficher_icone: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    position_icone: Attribute.Enumeration<['Gauche', 'Droite']> &
      Attribute.Required &
      Attribute.DefaultTo<'Gauche'>;
    sans_contour: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    espacement_bas: Attribute.Enumeration<
      ['d\u00E9faut', 'px8', 'px16', 'px32', 'px48', 'px64']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'d\u00E9faut'>;
  };
}

export interface ComposantsBlocSimple extends Schema.Component {
  collectionName: 'components_composants_bloc_simples';
  info: {
    displayName: 'Bloc-simple';
    icon: 'cube';
    description: '';
  };
  attributes: {
    texte: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 120;
      }>;
    texte_en_valeur: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 40;
      }>;
    page_cible: Attribute.String;
  };
}

export interface ComposantsBlocDeroulant extends Schema.Component {
  collectionName: 'components_composants_bloc_deroulants';
  info: {
    displayName: 'Bloc-deroulant';
    icon: 'discuss';
  };
  attributes: {
    texte_du_label: Attribute.String;
    texte: Attribute.RichText;
  };
}

export interface ComposantsBlocDeTexte extends Schema.Component {
  collectionName: 'components_composants_bloc_de_textes';
  info: {
    displayName: 'bloc_de_texte';
    icon: 'strikeThrough';
    description: '';
  };
  attributes: {
    position: Attribute.Enumeration<['Gauche', 'Centre']> &
      Attribute.Required &
      Attribute.DefaultTo<'Gauche'>;
    texte: Attribute.RichText;
    tabulation: Attribute.Enumeration<
      ['Aucune', 'Petite', 'Moyenne', 'Grande']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'Aucune'>;
    espacement_bas: Attribute.Enumeration<
      ['d\u00E9faut', 'px8', 'px16', 'px32', 'px48', 'px64']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'d\u00E9faut'>;
  };
}

export interface ComposantsBlocDeRapportsDeRecherches extends Schema.Component {
  collectionName: 'components_composants_bloc_de_rapports_de_recherches';
  info: {
    displayName: 'Bloc-de-rapports-de-recherches';
    icon: 'cube';
    description: '';
  };
  attributes: {
    cartes_max_par_page: Attribute.Enumeration<['Quatre', 'Six', 'Huit']> &
      Attribute.Required &
      Attribute.DefaultTo<'Quatre'>;
  };
}

export interface ComposantsBlocDePublicationsStrategiques
  extends Schema.Component {
  collectionName: 'components_composants_bloc_de_publications_strategiques';
  info: {
    displayName: 'Bloc-de-publications-strategiques';
    icon: 'stack';
    description: '';
  };
  attributes: {
    cartes_max_par_page: Attribute.Enumeration<['Quatre', 'Six', 'Huit']> &
      Attribute.Required &
      Attribute.DefaultTo<'Quatre'>;
  };
}

export interface ComposantsBlocDeBreves extends Schema.Component {
  collectionName: 'components_composants_bloc_de_breves';
  info: {
    displayName: 'Bloc-de-br\u00E8ves';
    icon: 'cube';
    description: '';
  };
  attributes: {
    cartes_max_par_page: Attribute.Enumeration<['Six', 'Neuf', 'Douze']> &
      Attribute.DefaultTo<'Neuf'>;
  };
}

export interface ComposantsBandeauTitre extends Schema.Component {
  collectionName: 'components_composants_bandeau_titres';
  info: {
    displayName: 'Bandeau-titre';
    icon: 'medium';
    description: '';
  };
  attributes: {
    titre: Attribute.String;
    texte: Attribute.Text;
    image: Attribute.Media<'images'>;
    espacement_bas: Attribute.Enumeration<
      ['d\u00E9faut', 'px8', 'px16', 'px32', 'px48', 'px64']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'d\u00E9faut'>;
  };
}

export interface ComposantsBadge extends Schema.Component {
  collectionName: 'components_composants_badges';
  info: {
    displayName: 'Badge';
    icon: 'apps';
    description: '';
  };
  attributes: {
    texte: Attribute.String;
    couleur: Attribute.Enumeration<['vert', 'rouge', 'bleu', 'rose', 'beige']> &
      Attribute.Required &
      Attribute.DefaultTo<'vert'>;
    position: Attribute.Enumeration<['gauche', 'centre', 'droite']> &
      Attribute.Required &
      Attribute.DefaultTo<'centre'>;
  };
}

export interface ComposantsAncre extends Schema.Component {
  collectionName: 'components_composants_ancres';
  info: {
    displayName: 'Ancre';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    ancre: Attribute.String;
    titre: Attribute.String;
  };
}

export interface ComposantsAccordeon extends Schema.Component {
  collectionName: 'components_composants_accordeons';
  info: {
    displayName: 'Accordeon';
    icon: 'filter';
    description: '';
  };
  attributes: {
    titre: Attribute.String;
    contenu: Attribute.RichText;
    espacement_bas: Attribute.Enumeration<
      ['d\u00E9faut', 'px8', 'px16', 'px32', 'px48', 'px64']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'d\u00E9faut'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'composants.titre': ComposantsTitre;
      'composants.telechargement': ComposantsTelechargement;
      'composants.section': ComposantsSection;
      'composants.navigation': ComposantsNavigation;
      'composants.mise-en-avant': ComposantsMiseEnAvant;
      'composants.mega-menu-navbar': ComposantsMegaMenuNavbar;
      'composants.media': ComposantsMedia;
      'composants.liens-footer': ComposantsLiensFooter;
      'composants.lien': ComposantsLien;
      'composants.lien-telechargement': ComposantsLienTelechargement;
      'composants.lien-navbar-mega-menu': ComposantsLienNavbarMegaMenu;
      'composants.lien-hypertexte': ComposantsLienHypertexte;
      'composants.lien-header': ComposantsLienHeader;
      'composants.lien-footer': ComposantsLienFooter;
      'composants.liaison': ComposantsLiaison;
      'composants.label': ComposantsLabel;
      'composants.iframe': ComposantsIframe;
      'composants.groupe-de-boutons': ComposantsGroupeDeBoutons;
      'composants.flux-outils': ComposantsFluxOutils;
      'composants.flux-dispositifs': ComposantsFluxDispositifs;
      'composants.flux-de-publications': ComposantsFluxDePublications;
      'composants.flux-actualite': ComposantsFluxActualite;
      'composants.fin-de-section': ComposantsFinDeSection;
      'composants.deroulant-navbar': ComposantsDeroulantNavbar;
      'composants.citation': ComposantsCitation;
      'composants.champ-de-blocs': ComposantsChampDeBlocs;
      'composants.categorie-navbar-mega-menu': ComposantsCategorieNavbarMegaMenu;
      'composants.carte-verticale': ComposantsCarteVerticale;
      'composants.carte-telechargement': ComposantsCarteTelechargement;
      'composants.carte-horizontale': ComposantsCarteHorizontale;
      'composants.carte-deroulante': ComposantsCarteDeroulante;
      'composants.bouton': ComposantsBouton;
      'composants.bloc-simple': ComposantsBlocSimple;
      'composants.bloc-deroulant': ComposantsBlocDeroulant;
      'composants.bloc-de-texte': ComposantsBlocDeTexte;
      'composants.bloc-de-rapports-de-recherches': ComposantsBlocDeRapportsDeRecherches;
      'composants.bloc-de-publications-strategiques': ComposantsBlocDePublicationsStrategiques;
      'composants.bloc-de-breves': ComposantsBlocDeBreves;
      'composants.bandeau-titre': ComposantsBandeauTitre;
      'composants.badge': ComposantsBadge;
      'composants.ancre': ComposantsAncre;
      'composants.accordeon': ComposantsAccordeon;
    }
  }
}
