<template>
  <div class="container profile">
    <div class="section profile-heading">
      <div class="columns">
        <div class="column is-2">
          <div class="image is-128x128 avatar">
            <img src="https://placehold.it/256x256">
          </div>
        </div>
        <div class="column is-4 name">
          <p>
            <span class="title is-bold">Nicolas Bouhours</span>
            <span class="button is-primary is-outlined follow">Mon profil</span>
          </p>
          <p class="tagline">Just a developper</p>
        </div>
        <div class="column is-2 followers has-text-centered">
          <p class="stat-val">129k</p>
          <p class="stat-key">followers</p>
        </div>
        <div class="column is-2 following has-text-centered">
          <p class="stat-val">2k</p>
          <p class="stat-key">following</p>
        </div>
        <div class="column is-2 likes has-text-centered">
          <p class="stat-val">29</p>
          <p class="stat-key">likes</p>
        </div>
      </div>
    </div>
    <div class="profile-options">
      <div class="tabs is-fullwidth">
        <ul>
          <li class="link is-active"><a><span class="icon"><i class="fa fa-list"></i></span> <span>My Projets</span></a></li>
          <li class="link"><a><span class="icon"><i class="fa fa-heart"></i></span> <span>Mes Réunions</span></a></li>
          <li class="link"><a><span class="icon"><i class="fa fa-th"></i></span> <span>Mes Taches</span></a></li>
          <li class="link"><a><span class="icon"><i class="fa fa-bookmark"></i></span> <span>Mes Bugs</span></a></li>
        </ul>
      </div>
    </div>

    <div class="box">
      <!-- Main container -->
      <nav class="level">
        <!-- Left side -->
        <div class="level-left">
          <div class="level-item">
            <p class="subtitle is-5">
              <strong>123</strong> tâches
            </p>
          </div>
          <div class="level-item">
            <p class="control has-addons">
              <input class="input" type="text" placeholder="Find a post">
              <button class="button">
                Rechercher
              </button>
            </p>
          </div>
        </div>

        <!-- Right side -->
        <div class="level-right">
          <p class="level-item"><strong>Toutes</strong></p>
          <p class="level-item"><a>En cours</a></p>
          <p class="level-item"><a>Accomplies</a></p>
          <p class="level-item"><a>Supprimées</a></p>
          <p class="level-item"><a class="button is-success">Ajouter</a></p>
        </div>
      </nav>
    </div>

    <div class="spacer"></div>

    <div class="columns">
      <div class="column is-3">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="http://placehold.it/300x225" alt="">
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <span class="tag is-dark">#webdev</span>
              <strong class="timestamp">2 d</strong>
            </div>
          </div>
          <footer class="card-footer">
            <a class="card-footer-item">Save</a>
            <a class="card-footer-item">Edit</a>
            <a class="card-footer-item">Delete</a>
          </footer>
        </div>
        <br>
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="http://placehold.it/300x225" alt="">
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <span class="tag is-dark">#webdev</span>
              <strong class="timestamp">2 d</strong>
            </div>
          </div>
          <footer class="card-footer">
            <a class="card-footer-item">Save</a>
            <a class="card-footer-item">Edit</a>
            <a class="card-footer-item">Delete</a>
          </footer>
        </div>
        <br>
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="http://placehold.it/300x225" alt="">
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <span class="tag is-dark">#webdev</span>
              <strong class="timestamp">2 d</strong>
            </div>
          </div>
          <footer class="card-footer">
            <a class="card-footer-item">Save</a>
            <a class="card-footer-item">Edit</a>
            <a class="card-footer-item">Delete</a>
          </footer>
        </div>
        <br>
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="http://placehold.it/300x225" alt="">
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <span class="tag is-dark">#webdev</span>
              <strong class="timestamp">2 d</strong>
            </div>
          </div>
          <footer class="card-footer">
            <a class="card-footer-item">Save</a>
            <a class="card-footer-item">Edit</a>
            <a class="card-footer-item">Delete</a>
          </footer>
        </div>
        <br>
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="http://placehold.it/300x225" alt="">
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <span class="tag is-dark">#webdev</span>
              <strong class="timestamp">2 d</strong>
            </div>
          </div>
          <footer class="card-footer">
            <a class="card-footer-item">Save</a>
            <a class="card-footer-item">Edit</a>
            <a class="card-footer-item">Delete</a>
          </footer>
        </div>
        <br>
      </div>
      <div class="column is-3">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="http://placehold.it/300x225" alt="">
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <span class="tag is-dark">#webdev</span>
              <strong class="timestamp">2 d</strong>
            </div>
          </div>
          <footer class="card-footer">
            <a class="card-footer-item">Save</a>
            <a class="card-footer-item">Edit</a>
            <a class="card-footer-item">Delete</a>
          </footer>
        </div>
        <br>
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="http://placehold.it/300x225" alt="">
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <span class="tag is-dark">#webdev</span>
              <strong class="timestamp">2 d</strong>
            </div>
          </div>
          <footer class="card-footer">
            <a class="card-footer-item">Save</a>
            <a class="card-footer-item">Edit</a>
            <a class="card-footer-item">Delete</a>
          </footer>
        </div>
        <br>
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="http://placehold.it/300x225" alt="">
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <span class="tag is-dark">#webdev</span>
              <strong class="timestamp">2 d</strong>
            </div>
          </div>
          <footer class="card-footer">
            <a class="card-footer-item">Save</a>
            <a class="card-footer-item">Edit</a>
            <a class="card-footer-item">Delete</a>
          </footer>
        </div>
        <br>
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="http://placehold.it/300x225" alt="">
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <span class="tag is-dark">#webdev</span>
              <strong class="timestamp">2 d</strong>
            </div>
          </div>
          <footer class="card-footer">
            <a class="card-footer-item">Save</a>
            <a class="card-footer-item">Edit</a>
            <a class="card-footer-item">Delete</a>
          </footer>
        </div>
        <br>
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="http://placehold.it/300x225" alt="">
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <span class="tag is-dark">#webdev</span>
              <strong class="timestamp">2 d</strong>
            </div>
          </div>
          <footer class="card-footer">
            <a class="card-footer-item">Save</a>
            <a class="card-footer-item">Edit</a>
            <a class="card-footer-item">Delete</a>
          </footer>
        </div>
        <br>
      </div>
      <div class="column is-3">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="http://placehold.it/300x225" alt="">
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <span class="tag is-dark">#webdev</span>
              <strong class="timestamp">2 d</strong>
            </div>
          </div>
          <footer class="card-footer">
            <a class="card-footer-item">Save</a>
            <a class="card-footer-item">Edit</a>
            <a class="card-footer-item">Delete</a>
          </footer>
        </div>
        <br>
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="http://placehold.it/300x225" alt="">
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <span class="tag is-dark">#webdev</span>
              <strong class="timestamp">2 d</strong>
            </div>
          </div>
          <footer class="card-footer">
            <a class="card-footer-item">Save</a>
            <a class="card-footer-item">Edit</a>
            <a class="card-footer-item">Delete</a>
          </footer>
        </div>
        <br>
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="http://placehold.it/300x225" alt="">
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <span class="tag is-dark">#webdev</span>
              <strong class="timestamp">2 d</strong>
            </div>
          </div>
          <footer class="card-footer">
            <a class="card-footer-item">Save</a>
            <a class="card-footer-item">Edit</a>
            <a class="card-footer-item">Delete</a>
          </footer>
        </div>
        <br>
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="http://placehold.it/300x225" alt="">
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <span class="tag is-dark">#webdev</span>
              <strong class="timestamp">2 d</strong>
            </div>
          </div>
          <footer class="card-footer">
            <a class="card-footer-item">Save</a>
            <a class="card-footer-item">Edit</a>
            <a class="card-footer-item">Delete</a>
          </footer>
        </div>
        <br>
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="http://placehold.it/300x225" alt="">
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <span class="tag is-dark">#webdev</span>
              <strong class="timestamp">2 d</strong>
            </div>
          </div>
          <footer class="card-footer">
            <a class="card-footer-item">Save</a>
            <a class="card-footer-item">Edit</a>
            <a class="card-footer-item">Delete</a>
          </footer>
        </div>
        <br>
      </div>
      <div class="column is-3">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="http://placehold.it/300x225" alt="">
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <span class="tag is-dark">#webdev</span>
              <strong class="timestamp">2 d</strong>
            </div>
          </div>
          <footer class="card-footer">
            <a class="card-footer-item">Save</a>
            <a class="card-footer-item">Edit</a>
            <a class="card-footer-item">Delete</a>
          </footer>
        </div>
        <br>
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="http://placehold.it/300x225" alt="">
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <span class="tag is-dark">#webdev</span>
              <strong class="timestamp">2 d</strong>
            </div>
          </div>
          <footer class="card-footer">
            <a class="card-footer-item">Save</a>
            <a class="card-footer-item">Edit</a>
            <a class="card-footer-item">Delete</a>
          </footer>
        </div>
        <br>
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="http://placehold.it/300x225" alt="">
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <span class="tag is-dark">#webdev</span>
              <strong class="timestamp">2 d</strong>
            </div>
          </div>
          <footer class="card-footer">
            <a class="card-footer-item">Save</a>
            <a class="card-footer-item">Edit</a>
            <a class="card-footer-item">Delete</a>
          </footer>
        </div>
        <br>
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="http://placehold.it/300x225" alt="">
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <span class="tag is-dark">#webdev</span>
              <strong class="timestamp">2 d</strong>
            </div>
          </div>
          <footer class="card-footer">
            <a class="card-footer-item">Save</a>
            <a class="card-footer-item">Edit</a>
            <a class="card-footer-item">Delete</a>
          </footer>
        </div>
        <br>
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="http://placehold.it/300x225" alt="">
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <span class="tag is-dark">#webdev</span>
              <strong class="timestamp">2 d</strong>
            </div>
          </div>
          <footer class="card-footer">
            <a class="card-footer-item">Save</a>
            <a class="card-footer-item">Edit</a>
            <a class="card-footer-item">Delete</a>
          </footer>
        </div>
        <br>
      </div>

    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
</style>
