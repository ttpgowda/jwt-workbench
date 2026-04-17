/**
 * __tests__/verify.test.js
 * Mocks the KJUR global since jsrsasign is browser-only CDN.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';

// ── Stub KJUR global before importing the module ──────────────────────────────
const mockVerifyJWT = vi.fn();

vi.stubGlobal('KJUR', {
  jws: {
    JWS: {
      verifyJWT: mockVerifyJWT,
    },
  },
});

// Import AFTER global is stubbed
const { verifySignature } = await import('../core/verify.js');

describe('verifySignature', () => {
  beforeEach(() => mockVerifyJWT.mockReset());

  it('returns valid:true when KJUR confirms the signature', () => {
    mockVerifyJWT.mockReturnValue(true);
    const result = verifySignature('token', 'secret', 'HS256');
    expect(result.valid).toBe(true);
    expect(result.error).toBeNull();
  });

  it('returns valid:false with error when KJUR rejects the signature', () => {
    mockVerifyJWT.mockReturnValue(false);
    const result = verifySignature('token', 'wrong-secret', 'HS256');
    expect(result.valid).toBe(false);
    expect(result.error).toBeTruthy();
  });

  it('returns valid:false without calling KJUR when secret is missing', () => {
    const result = verifySignature('token', '', 'HS256');
    expect(result.valid).toBe(false);
    expect(result.error).toMatch(/No secret/);
    expect(mockVerifyJWT).not.toHaveBeenCalled();
  });

  it('returns valid:false without calling KJUR when alg is missing', () => {
    const result = verifySignature('token', 'secret', '');
    expect(result.valid).toBe(false);
    expect(result.error).toMatch(/No algorithm/);
    expect(mockVerifyJWT).not.toHaveBeenCalled();
  });

  it('returns valid:false when KJUR returns a non-boolean truthy but ultimately invalid result', () => {
    // If KJUR returns null/undefined, the truthy check in our module returns invalid
    mockVerifyJWT.mockReturnValue(null);
    const result = verifySignature('token', 'secret', 'HS256');
    expect(result.valid).toBe(false);
    expect(result.error).toBeTruthy();
  });
});
