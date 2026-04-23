/**
 * core/verify.js
 * Verifies a JWT signature using jsrsasign (KJUR global).
 */

/**
 * @param {string} token
 * @param {string} secret - HMAC secret or PEM public key
 * @param {string} alg    - e.g. 'HS256'
 * @returns {{ valid: boolean, error: string | null }}
 */
export function verifySignature(token, secret, alg) {
  if (!secret) return { valid: false, error: 'No secret provided.' };
  if (!alg)    return { valid: false, error: 'No algorithm found in header.' };

  try {
    const isValid = !!KJUR.jws.JWS.verify(token, { utf8: secret }, [alg]);
    return { valid: isValid, error: isValid ? null : 'Wrong secret or tampered payload.' };
  } catch (e) {
    return { valid: false, error: e.message };
  }
}
