/* =========================
   DADOS MOCKADOS DO FRONTEND
   Quando o backend existir, substitua
   estas funções por chamadas fetch().
   ========================= */

const DB_KEY = "docelar_frontend_db";

const initialDB = {
  user: {
    name: "Chef Marina",
    fullName: "Marina Silva Santos",
    email: "marina.chef@stockpro.com",
    phone: "+55 (11) 98765-4321",
    role: "Administrador"
  },
  products: [
    { id: "001", name: "Pão Francês", category: "Salgados", stock: 150, min: 30, unit: "un", price: 15.00, total: 2250, status: "ok", image: "🥖" },
    { id: "002", name: "Torta de Limão", category: "Doces", stock: 45, min: 20, unit: "un", price: 15.00, total: 675, status: "low", image: "🍰" },
    { id: "003", name: "Leite Integral (L)", category: "Derivados", stock: 8, min: 20, unit: "L", price: 6.00, total: 48, status: "critical", image: "🥛" },
    { id: "FR-001", name: "Queijo Brie Importado", category: "Frios", stock: 15, min: 10, unit: "kg", price: 89.90, total: 1348.50, status: "ok", image: "🧀" },
    { id: "FR-042", name: "Presunto Parma Fatiado", category: "Frios", stock: 4, min: 10, unit: "kg", price: 145.00, total: 580, status: "low", image: "🥓" },
    { id: "FR-089", name: "Queijo Prato Colonial", category: "Frios", stock: 1, min: 8, unit: "kg", price: 42.50, total: 42.50, status: "critical", image: "🧀" },
    { id: "REC-001", name: "Geleia de Morango", category: "Recheios", stock: 24, min: 15, unit: "un", price: 24.50, total: 588, status: "ok", image: "🍓" },
    { id: "REC-002", name: "Doce de Leite", category: "Recheios", stock: 4, min: 20, unit: "un", price: 12, total: 48, status: "low", image: "🍯" }
  ],
  activities: [
    "Pedido #2024-0892 recebido de Heritage Pantry.",
    "Entrada de estoque: Manteiga Artesanal (20kg).",
    "Devolução processada: Croissant Clássico."
  ],
  outputItems: [
    { id: "FER-001", name: "Pão Integral Natural", qty: 12, unitPrice: 18.50, image: "🍞" },
    { id: "CRO-042", name: "Croissant de Manteiga", qty: 25, unitPrice: 12.00, image: "🥐" },
    { id: "BAG-012", name: "Baguete de Tradição", qty: 15, unitPrice: 9.50, image: "🥖" }
  ]
};

function loadDB() {
  const saved = localStorage.getItem(DB_KEY);
  if (!saved) {
    localStorage.setItem(DB_KEY, JSON.stringify(initialDB));
    return structuredClone(initialDB);
  }
  try { return JSON.parse(saved); } catch { return structuredClone(initialDB); }
}

function saveDB(db) {
  localStorage.setItem(DB_KEY, JSON.stringify(db));
}

let db = loadDB();

const money = value => Number(value || 0).toLocaleString("pt-BR", {
  style: "currency", currency: "BRL"
});

const totalStockValue = () => db.products.reduce((sum, p) => sum + p.total, 0);
const totalItems = () => db.products.reduce((sum, p) => sum + p.stock, 0);
const criticalCount = () => db.products.filter(p => p.stock <= p.min).length;
