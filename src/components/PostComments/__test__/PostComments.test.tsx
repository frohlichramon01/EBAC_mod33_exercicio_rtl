import { fireEvent, render, screen } from '@testing-library/react';
import Post from '../../Post'; 

const mock = [
    {
        id: 1,
        comment: 'Comentário Teste 1'
    },
    {
        id: 2,
        comment: 'Comentário Teste 2'
    }
]


describe('Teste para o componente PostComment', () => {
    
    it('Deve renderizar o componente corretamente', () => {
        render(<Post />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve renderizar os dois comentários mock', async () => {
        render(<Post />);
        const botao = screen.getByTestId('btn-comentario')
        const Textarea = screen.getByTestId('textArea')
        mock.map((item) => {
            fireEvent.change(Textarea, {target: {value: item.comment}})
            fireEvent.click(botao)
        })
        expect(screen.getByText('Comentário Teste 1')).toBeInTheDocument()
        expect(screen.getByText('Comentário Teste 2')).toBeInTheDocument()
    })
});