---
posts:
 data:
  titleOfThisPage: "9!"
  posted: 2015-02-19
  headerImage: "slide-1.jpg"
 tags: [untag, dostags]
 dest: post09.html
layout: <%= postsLayout %>
---

# This is my 9 post!

<img class="img-responsive img-border img-full" src="{{pathAssets}}img/slide-1.jpg"/>

- - -

YAAAY


Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at ante metus. Sed vitae ornare dolor. Mauris a orci ultrices turpis facilisis bibendum quis vel sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed vel mauris placerat, efficitur diam non, condimentum lorem. Nunc eleifend, leo semper pharetra porttitor, lacus neque efficitur ex, sit amet consequat ligula augue non ligula. Vivamus consectetur diam vel leo maximus pharetra.

```
function pathClass($className)
{
    $file = explode("\\", $className);
    $filename = implode("/", $file);

    return lcfirst($file[0])."/src/".$filename.'.php';
}

spl_autoload_register(function ($className) {
    $filename = pathClass($className);

    if(file_exists(__DIR__.'/modules/'.$filename))
        require_once(__DIR__.'/modules/'.$filename);
});

spl_autoload_register(function ($className) {
    $filename = pathClass($className);

    if(file_exists(__DIR__.'/vendor/'.$filename))
        require_once(__DIR__.'/vendor/'.$filename);
});
```


Integer ut aliquet arcu, ut egestas arcu. Mauris sit amet turpis sem. Vivamus rhoncus nisl ac ligula porta, eget mollis est ultrices. Donec ultricies mattis varius. Quisque vel gravida mi. Quisque condimentum leo diam, sed dapibus quam pellentesque efficitur. Donec varius placerat nulla, eu ultricies purus tincidunt in. Quisque vulputate tellus eu velit lobortis accumsan et vitae nisi. Pellentesque faucibus tortor eget odio suscipit dictum. Donec euismod finibus facilisis. Etiam faucibus enim eu ex elementum fermentum. Duis est arcu, vehicula id justo et, accumsan posuere tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

Nunc vel semper nunc. Vivamus sit amet dapibus dui. Mauris sodales pulvinar orci, quis condimentum sem rutrum vitae. Suspendisse pharetra lectus vel sem sollicitudin hendrerit. Maecenas ultricies enim diam, et bibendum quam auctor in. Nam sagittis eros non purus efficitur lacinia. In in tellus dignissim, tempus ante a, faucibus urna. Praesent sit amet tortor quis lectus ullamcorper varius. Fusce convallis vestibulum venenatis. Nunc finibus malesuada libero, ut malesuada augue elementum ut. Donec sollicitudin eleifend ante, vel fermentum sem aliquam quis. In in pharetra nulla, in euismod quam. Phasellus eu tincidunt eros. Quisque a rutrum purus.

Aenean suscipit augue a mi laoreet, in ornare nisi suscipit. Morbi at volutpat nulla. Praesent in enim mauris. Duis consectetur tincidunt turpis, eget convallis elit interdum nec. Sed ut turpis eros. Integer tincidunt nisl sapien, ac congue urna viverra at. Praesent consectetur justo nec condimentum egestas. Vestibulum vehicula tincidunt leo, quis facilisis lacus euismod ac. Nullam diam sem, pretium ac volutpat ac, porta euismod augue. Phasellus scelerisque eleifend lacus a aliquam.

Sed molestie mi in eros mattis malesuada. Mauris eu ante leo. Maecenas vitae maximus erat, ac cursus magna. Etiam rhoncus maximus quam, sit amet scelerisque nunc facilisis posuere. Integer porttitor risus molestie rutrum sodales. Cras at egestas est, ut tempor felis. Donec molestie lectus eget sapien iaculis luctus. Donec molestie vulputate tellus, ac auctor magna tristique et. Vivamus mi odio, blandit rutrum urna non, condimentum cursus risus. Nunc cursus leo velit, ut aliquam velit ullamcorper in. Phasellus facilisis dolor neque, vel efficitur dolor tincidunt in. Cras at turpis et augue pellentesque malesuada ut a tortor. Sed nibh eros, commodo sed nunc et, aliquet egestas lorem. Mauris ante eros, auctor sed tincidunt eu, pharetra at est. Nam auctor sed arcu nec eleifend. Sed porta, sapien ac dapibus consectetur, urna neque finibus lectus, nec viverra magna nunc vel erat.