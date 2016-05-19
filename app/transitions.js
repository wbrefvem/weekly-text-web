export default function(){
  this.transition(
    this.fromRoute('drunks.index'),
    this.toRoute('detail'),
    this.use('toRight'),
    this.reverse('toLeft')
  );

  this.transition(
    this.fromRoute('detail.index'),
    this.toRoute('detail.edit'),
    this.use('toDown'),
    this.reverse('toUp')
  );

  this.transition(
    this.fromRoute('detail.index'),
    this.toRoute('detail.index'),
    this.use('toLeft')
  );
}
