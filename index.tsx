
import { useState } from 'react';

const homoglyphMap = {
  A: 'А', B: 'В', C: 'С', E: 'Е', H: 'Н', I: 'І', K: 'К', M: 'М',
  O: 'О', P: 'Р', S: 'Ѕ', T: 'Т', X: 'Х', Y: 'Ү',
  a: 'а', e: 'е', i: 'і', o: 'о', p: 'р', c: 'с',
};

function ofuscarTexto(texto) {
  return texto
    .split('')
    .map((char) => homoglyphMap[char] || char)
    .join('​');
}

export default function TxtBlack() {
  const [input, setInput] = useState('');
  const [erro, setErro] = useState('');

  const validarGratis = (texto) => {
    if (input.length > 10) {
      setErro('No plano gratuito, apenas uma palavra de até 10 caracteres é permitida.');
      return false;
    }
    setErro('');
    return true;
  };

  const copiarResultado = () => {
    if (!validarGratis(input)) return;
    const textoOfuscado = ofuscarTexto(input);
    navigator.clipboard.writeText(textoOfuscado).then(() => {
      alert('Texto copiado!');
    });
  };

  return (
    <div>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Digite seu texto"
      />
      <button onClick={copiarResultado}>Ofuscar</button>
      {erro && <p>{erro}</p>}
    </div>
  );
}
