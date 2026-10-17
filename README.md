# Labs

[Français](#français) · [English](#english)

## Français

Un environnement pour les notebooks des formations, quand Colab n'est pas accessible :
les slides donnent pour chacun un lien Colab, un lien Codespaces et une commande
`lab <nom>`.

### Dans un Codespace

1. Ouvrez le lien Codespaces des slides. La première ouverture prépare l'environnement
   (quelques minutes) ; les suivantes reprennent le même Codespace.
2. Dans un terminal (`Ctrl+ù`, ou menu ☰ › Terminal › New Terminal), tapez la commande
   que donne la slide, par exemple `lab linear-regression-hands-on-fr` : le notebook se
   télécharge et s'ouvre. Relancée, la commande rouvre votre copie.
3. À la première exécution, choisissez le noyau Python 3.13 (`/opt/python/current`).
4. Pour un TP qui ouvre des fenêtres (Tkinter) : onglet *Ports*, à côté du terminal,
   survolez la ligne du port 6080 (*Bureau / Desktop*), cliquez sur l'icône du globe
   (*Open in Browser*), puis sur *Connect* : les fenêtres s'affichent sur ce bureau.

L'environnement reproduit celui de Colab sans GPU (mêmes versions des bibliothèques).
Un notebook qui demande un GPU s'ouvre dans Colab.

Arrêtez le Codespace quand vous avez fini (menu `Codespaces: Stop Current Codespace`, ou
[github.com/codespaces](https://github.com/codespaces)) : le quota gratuit de GitHub
compte les heures où il tourne.

## English

An environment for the training courses' notebooks, when Colab can't be reached: the
slides give a Colab link, a Codespaces link and a `lab <name>` command for each.

### In a Codespace

1. Open the slides' Codespaces link. The first time, it sets up the environment (a
   few minutes); later, it resumes the same Codespace.
2. In a terminal (`` Ctrl+` ``, or ☰ › Terminal › New Terminal), type the command the
   slide gives, e.g. `lab linear-regression-hands-on-en`: the notebook downloads and
   opens. Run again, the command reopens your copy.
3. On the first run, pick the Python 3.13 kernel (`/opt/python/current`).
4. For a lab that opens windows (Tkinter): in the *Ports* tab, next to the terminal,
   hover over the port 6080 line (*Bureau / Desktop*), click the globe icon (*Open in
   Browser*), then *Connect*: the windows show on that desktop.

The environment mirrors Colab's without a GPU (same library versions). A notebook that
needs a GPU opens in Colab.

Stop the Codespace when you're done (`Codespaces: Stop Current Codespace` in the command
palette, or [github.com/codespaces](https://github.com/codespaces)): GitHub's free quota
counts the hours it runs.
