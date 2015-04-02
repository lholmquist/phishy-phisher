export default function () {
    this.transition(
        this.fromRoute('index'),
        this.toRoute('year'),
        this.use('toLeft'),
        this.reverse('toRight')
    );

    this.transition(
        this.fromRoute('year'),
        this.toRoute('show'),
        this.use('toLeft'),
        this.reverse('toRight')
    );
}
